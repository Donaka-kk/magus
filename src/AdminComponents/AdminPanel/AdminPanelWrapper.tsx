import Icon from "./Icon.tsx";

import { useUser } from "../../Context/User.tsx";
import { useNavigate } from "react-router-dom";
import {
   faShapes,
   faFileLines,
   faRightFromBracket,
   faChartLine,
   faBell,
   faTruckFast,
   faCircleQuestion,
   faTag,
   faArrowRightArrowLeft,
   faImages,
   faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

function AdminPanel() {
   const { logout } = useUser();
   const nav = useNavigate();

   return (
      <div className="relative w-screen min-h-screen bg-background">
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-2 md:p-4">
            <Icon
               navigate={() => {
                  nav("adminproducts");
               }}
               icon={faShapes}
               title={"Products"}
            />
            <Icon
               navigate={() => {
                  nav("adminblogs");
               }}
               icon={faFileLines}
               title={"Blogs"}
            />
            <Icon
               navigate={() => {
                  nav("");
               }}
               icon={faTruckFast}
               title={"Orders"}
            />
            <Icon
               navigate={() => {
                  nav("tickets");
               }}
               icon={faFileLines}
               title={"Tickets"}
            />
            <Icon
               navigate={() => {
                  nav("");
               }}
               icon={faCircleQuestion}
               title={"Special orders"}
            />
            <Icon
               navigate={() => {
                  nav("");
               }}
               icon={faBell}
               title={"Notifications"}
            />
            <Icon
               navigate={() => {
                  nav("");
               }}
               icon={faChartLine}
               title={"Sales"}
            />
            <Icon
               navigate={() => {
                  nav("");
               }}
               icon={faArrowRightArrowLeft}
               title={"Carousel"}
            />
            <Icon
               navigate={() => {
                  nav("");
               }}
               icon={faTag}
               title={"Special offers"}
            />
            <Icon
               navigate={() => {
                  nav("");
               }}
               icon={faImages}
               title={"Hero Section"}
            />
            <Icon
               navigate={() => {
                  nav("");
               }}
               icon={faUserGroup}
               title={"About Us"}
            />
            <Icon
               navigate={() => {
                  logout();
                  nav("/admin");
               }}
               icon={faRightFromBracket}
               title={"Log out"}
            />
         </div>
      </div>
   );
}
export default AdminPanel;
