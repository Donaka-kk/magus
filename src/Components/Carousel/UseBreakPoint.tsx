import { useState, useEffect } from "react";

export const useBreakpoint = () => {
   const [breakpoint, setBreakpoint] = useState("lg");

   useEffect(() => {
      const update = () => {
         if (window.innerWidth < 640) setBreakpoint("sm");
         else if (window.innerWidth < 1024) setBreakpoint("md");
         else setBreakpoint("lg");
      };
      update();
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
   }, []);

   return breakpoint;
};
