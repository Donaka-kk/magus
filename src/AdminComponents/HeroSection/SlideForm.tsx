import { useState } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";

interface SlideFormProps {
   toClose: () => void;
}

function SlideForm({ toClose }: SlideFormProps) {
   console.log("SlideForm");
   const queryClient = useQueryClient();
   const [slideImage, setSlideImage] = useState<File | null>(null);
   const [destination, setDestination] = useState<string>("");

   const addNewSlide = useMutation({
      mutationKey: ["addNewHeroSectionSlide"],
      mutationFn: async (newSlide: {
         image: File | null;
         destination: string;
      }) => {
         const response = await axios.post(
            "https://reqres.in/api/users",
            {
               name: "morpheus",
               job: "leader",
            },
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
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
         console.error("Error adding new slide:", error);
      },
   });

   return (
      <div className="fixed w-full h-full top-0 left-0 flex justify-center items-center z-20">
         <div
            onClick={() => toClose()}
            className="absolute w-full h-full bg-transparent06"
         />
         <form
            onSubmit={(event) => {
               event.preventDefault();
               addNewSlide.mutate({
                  image: slideImage,
                  destination: destination,
               });
            }}
            className="relative flex flex-col bg-white gap-4 p-4 z-10"
         >
            <h2 className="text-center font-semibold text-lg">Add New Slide</h2>
            <div className="flex flex-col">
               <label htmlFor="slideImage">Slide Image</label>
               <input
                  type="file"
                  required
                  accept="image/*"
                  onChange={(event) =>
                     setSlideImage(
                        event.target.files ? event.target.files[0] : null
                     )
                  }
               />
            </div>
            {slideImage && (
               <img
                  src={URL.createObjectURL(slideImage)}
                  alt="slideImage"
                  className="w-96"
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
            <div className="flex justify-center gap-4">
               <button type="button" onClick={() => toClose()}>
                  Cancel
               </button>
               <button type="submit">Add Slide</button>
            </div>
         </form>
      </div>
   );
}

export default SlideForm;
