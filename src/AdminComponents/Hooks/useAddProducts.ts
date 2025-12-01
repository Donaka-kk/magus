import { useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";

export function useAddProducts(toCloseModal: () => void) {
   console.log("useAddProducts called");
   const queryClient = useQueryClient();
   return useMutation({
      mutationKey: ["addProduct"],
      mutationFn: async (productIds: number[]) => {
         console.log(productIds);
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
         queryClient.invalidateQueries({ queryKey: ["AboutUsPosts"] });
         toCloseModal();
      },
      onError: (error) => {
         console.error("Error adding new slide:", error);
      },
   });
}
