import { Navigate } from "react-router-dom";
import { useUser } from "../Context/User.tsx";
const ProtectedRoute = ({ children, allowedRole }) => {
   const { user } = useUser();
   if (!user) {
      return <Navigate to="/admin" replace />;
   }

   if (user?.role !== allowedRole) {
      return <Navigate to="/" replace />;
   }
   return children;
};

export default ProtectedRoute;
