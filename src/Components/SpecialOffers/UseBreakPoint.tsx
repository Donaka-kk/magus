import { useState, useEffect } from "react";

export const useBreakPoint = () => {
   const [breakpoint, setBreakpoint] = useState(3);

   useEffect(() => {
      const update = () => {
         if (window.innerWidth < 640) setBreakpoint(4);
         else if (window.innerWidth < 1024) setBreakpoint(3);
         else if (window.innerWidth < 1280) setBreakpoint(3);
         else setBreakpoint(5);
      };
      update();
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
   }, []);

   return breakpoint;
};
