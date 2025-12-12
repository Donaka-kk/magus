import axios from "axios";

import { ResponseMessageType } from "../../Types/ResponseMessageType";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export function useAddProducts(
   toCloseModal: () => void,
   setMessage: (response: ResponseMessageType) => void,
   queryKey: string
) {
   const queryClient = useQueryClient();
   return useMutation({
      mutationKey: ["addProduct"],
      mutationFn: async (productIds: number[]) => {
         const response = await axios.post(
            "https://reqres.in/api/users",
            productIds,
            {
               headers: {
                  "x-api-key": process.env.REACT_APP_REQRES_KEY,
               },
            }
         );
         return response.data;
      },
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: [queryKey] });
         toCloseModal();
      },
      onError: (error) => {
         setMessage({ text: error.message, successful: false });
      },
   });
}
