import AddBlogForm from "./AddBlogForm";
import AddItemForm from "./AddItemForm";
import EditBlogForm from "./EditBlogForm";
import EditItemForm from "./EditItemForm";
import RemoveBlogForm from "./RemoveBlogForm";
import RemoveItemForm from "./RemoveItemForm";

const formComponents = {
   addBlog: AddBlogForm,
   addItem: AddItemForm,
   editBlog: EditBlogForm,
   editItem: EditItemForm,
   removeBlog: RemoveBlogForm,
   removeItem: RemoveItemForm,
};

function PanelForm({ setShowForm, formType }) {
   const FormComponent = formComponents[formType];
   if (!FormComponent) return null;

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log("haha");
   };

   return (
      <div className="fixed w-full h-full top-0 left-0 flex justify-center items-center text-black">
         <div className="flex flex-col justify-center items-center p-4 gap-4 bg-white z-10">
            <FormComponent handleSubmit={handleSubmit} />
            <button
               onClick={() => setShowForm(false)}
               className="px-2 py-1 bg-red-400 w-full"
            >
               Cancel
            </button>
         </div>
         <div
            className={`fixed top-0 left-0 w-full h-full bg-transparent06 z-0`}
            onClick={() => {
               setShowForm(false);
            }}
         />
      </div>
   );
}
export default PanelForm;
