import axios from "axios";

import { ResponseMessageType } from "../../Types/ResponseMessageType.tsx";
import { useState } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";

interface SlideFormProps {
   toClose: () => void;
}

function SlideForm({ toClose }: SlideFormProps) {
   const [message, setMessage] = useState<ResponseMessageType>();
   const queryClient = useQueryClient();
   const [image, setImage] = useState<File | null>(null);
   const [destination, setDestination] = useState<string>("");

   const addNewSlide = useMutation({
      mutationFn: async (newSlide: {
         image: File | null;
         destination: string;
      }) => {
         const response = await axios.post(
            "https://reqres.in/api/users",
            newSlide,
            {
               headers: {
                  "x-api-key": process.env.REACT_APP_REQRES_KEY,
               },
            }
         );
         return response.data;
      },
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["HeroSectionSlides"] });
         toClose();
      },
      onError: (error) => {
         setMessage({ text: error.message, successful: false });
      },
   });

   const onSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      const payload = { image: image, destination: destination };
      addNewSlide.mutate(payload);
   };

   return (
      <div className="fixed inset-0 flex justify-center items-center z-20">
         <div
            onClick={() => toClose()}
            className="absolute w-full h-full bg-transparent06"
         />
         <div className="max-h-screen overflow-y-auto relative w-9/12 sm:w-7/12 md:w-96">
            <form
               onSubmit={(event) => onSubmit(event)}
               className="relative flex flex-col bg-white gap-4 p-4 z-10"
            >
               <h2 className="text-center font-semibold text-lg">
                  Add New Slide
               </h2>
               <div className="flex flex-col">
                  <label htmlFor="slideImage">Slide Image</label>
                  <input
                     type="file"
                     required
                     accept="image/*"
                     onChange={(event) =>
                        setImage(
                           event.target.files ? event.target.files[0] : null
                        )
                     }
                  />
               </div>
               {image && (
                  <img
                     src={URL.createObjectURL(image)}
                     alt="slideImage"
                     className="w-full"
                  />
               )}
               <div className="flex flex-col">
                  <label>Destination</label>
                  <input
                     type="text"
                     required
                     placeholder="Enter destination URL"
                     className="outline-none border p-1"
                     onChange={(e) => setDestination(e.target.value)}
                  />
               </div>
               <div>
                  {message && (
                     <p
                        className={`text-xl font-bold text-center ${message.successful ? "text-green-500" : "text-red-500"}`}
                     >
                        {message.text}
                     </p>
                  )}
               </div>
               <div className="flex justify-center gap-4">
                  <button type="button" onClick={() => toClose()}>
                     Cancel
                  </button>
                  <button type="submit">Add Slide</button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default SlideForm;
