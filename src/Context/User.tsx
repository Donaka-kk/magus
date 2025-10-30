import {
   createContext,
   useContext,
   useEffect,
   useState,
   ReactNode,
} from "react";
import { useQueryClient } from "@tanstack/react-query";
import { UserType } from "../Types/UserType";

interface UserContextType {
   user: UserType | null;
   updateUser: (user: UserType) => void;
   logout: () => void;
}

const UserContext = createContext<UserContextType | null>(null);

export function useUser() {
   const context = useContext(UserContext);
   if (!context) throw new Error("useUser must be used within a UserProvider");
   return context;
}

export function UserProvider({ children }: { children: ReactNode }) {
   const queryClient = useQueryClient();
   const cachedUser = queryClient.getQueryData<UserType>(["user"]);

   const [user, setUser] = useState<UserType | null>(cachedUser || null);

   const updateUser = (userInfo: UserType) => {
      setUser(userInfo);
      queryClient.setQueryData(["user"], userInfo);
   };

   const logout = () => {
      setUser(null);
      queryClient.removeQueries({ queryKey: ["user"] });
   };

   useEffect(() => {
      const restoredUser = queryClient.getQueryData<UserType>(["user"]);
      if (restoredUser && !user) setUser(restoredUser);
   }, [queryClient, user]);

   return (
      <UserContext.Provider value={{ user, updateUser, logout }}>
         {children}
      </UserContext.Provider>
   );
}
