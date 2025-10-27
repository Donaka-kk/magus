import { UserType } from "../../../../Types/UserType";
import { NewProfileDummyData } from "../../../API/ProfileDummyData.tsx";
interface EditProfileFormProps {
   user: any;
   handleEdit: (userInformation: UserType) => void;
}
function EditProfileForm({ user, handleEdit }: EditProfileFormProps) {
   return (
      <form
         onSubmit={(event) => {
            event.preventDefault();
            handleEdit(NewProfileDummyData.user);
         }}
         className="flex flex-col justify-center items-center gap-10"
      >
         <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex flex-col">
               <label className="">First name</label>
               <input
                  defaultValue={user.firstname}
                  className="border border-gray-500 outline-none"
               />
            </div>
            <div className="flex flex-col">
               <label className="">Last name</label>
               <input
                  defaultValue={user.lastname}
                  className="border border-gray-500 outline-none"
               />
            </div>
            <div className="flex flex-col">
               <label className="">Phone number</label>
               <input
                  defaultValue={user.phoneNumber}
                  className="border border-gray-500 outline-none"
               />
            </div>
            <div className="flex flex-col">
               <label className="">Email</label>
               <input
                  defaultValue={user.email}
                  className="border border-gray-500 outline-none"
               />
            </div>
            <div className="flex flex-col">
               <label className="">Address</label>
               <input
                  defaultValue={user.address}
                  className="border border-gray-500 outline-none"
               />
            </div>
         </div>

         <button
            type="submit"
            className="p-1 border border-black active:scale-95 outline-none"
         >
            Submit
         </button>
      </form>
   );
}
export default EditProfileForm;
