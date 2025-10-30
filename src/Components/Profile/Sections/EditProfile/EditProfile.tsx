import axios from "axios";
import EditProfileForm from "./EditProfileForm.tsx";

import { useUser } from "../../../../Context/User.tsx";
import { UserType } from "../../../../Types/UserType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NewProfileDummyData } from "../../../API/ProfileDummyData.tsx";

function EditProfile() {
   const { user, updateUser } = useUser();
   const queryClient = useQueryClient();
   const editProfile = useMutation({
      mutationFn: async (userInformations: UserType) => {
         const response = await axios.patch(
            "https://reqres.in/api/users/1",
            JSON.stringify({
               data: userInformations,
            }),
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         //change this to response before build
         updateUser(NewProfileDummyData.user);
         return NewProfileDummyData.user || response;
      },
      onSuccess: async () => {
         //change these lines before build
         // await queryClient.invalidateQueries({ queryKey: ["notification"] });
         await queryClient.setQueryData(["user"], NewProfileDummyData.user);
      },
   });
   return (
      <div>
         <EditProfileForm user={user} handleEdit={editProfile.mutate} />
      </div>
   );
}
export default EditProfile;
