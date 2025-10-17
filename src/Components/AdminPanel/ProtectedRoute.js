import { Navigate } from "react-router-dom";
import { UserContext } from "../../Context/User";
const ProtectedRoute = ({ children, allowedRole }) => {
   const { user } = UserContext();
   if (!user) {
      return <Navigate to="/admin" replace />;
   }

   if (user?.role !== allowedRole) {
      return <Navigate to="/" replace />;
   }
   return children;
};

export default ProtectedRoute;
