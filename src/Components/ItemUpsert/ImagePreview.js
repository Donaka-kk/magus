function ImagePreview({ image }) {
   if (!image) return;

   return (
      <img
         src={typeof image === "string" ? image : URL.createObjectURL(image)}
         alt="preview"
         className="w-full sm:w-10/12 md:w-8/12 lg:w-7/12"
      />
   );
}
export default ImagePreview;
