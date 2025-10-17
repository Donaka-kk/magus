import { createContext, useContext, useState } from "react";

const sessionUser = JSON.parse(sessionStorage.getItem("user"));
const userContext = createContext(sessionUser || null);

export function UserContext() {
   return useContext(userContext);
}

export function UserProvider({ children }) {
   const [user, setUser] = useState(sessionUser);

   const updateUser = (userInfo) => {
      setUser(userInfo);
   };

   return (
      <userContext.Provider value={{ user, updateUser }}>
         {children}
      </userContext.Provider>
   );
}
