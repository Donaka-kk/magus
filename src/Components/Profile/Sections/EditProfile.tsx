interface EditProfileProps {
   user: {
      firstname: string;
      lastname: string;
      image: string;
      age: number;
      role: string;
      phoneNumber: number;
      address: string;
      email: string;
   };
}

function EditProfile({ user }: EditProfileProps) {
   return (
      <div>
         <form className="flex flex-col justify-center items-center gap-10">
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

            <button type="submit" className="p-1 border border-black">
               Submit
            </button>
         </form>
      </div>
   );
}
export default EditProfile;
