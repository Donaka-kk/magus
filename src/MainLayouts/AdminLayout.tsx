import AdmninFallback from "../Components/Layout/AdminFallback.tsx";

import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function AdminLayout() {
   return (
      <div>
         <Suspense fallback={<AdmninFallback />}>
            <Outlet />
         </Suspense>
      </div>
   );
}
export default AdminLayout;
