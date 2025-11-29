import { PostType } from "../../Types/PostType";
interface AboutUsPostProps {
   post: PostType;
   index: number;
}

function AboutUsPost({ post, index }: AboutUsPostProps) {
   return (
      <div
         className={`w-full flex flex-col justify-center items-center gap-6 ${index % 2 === 0 ? " md:flex-row" : " md:flex-row-reverse"}`}
      >
         <img
            src={post.image}
            alt="post-image"
            className="w-full md:w-6/12 lg:w-5/12 xl:w-4/12"
         />
         <div className="w-full md:w-6/12 lg:w-5/12 xl:w-4/12">
            <h1 className="text-2xl font-semibold">{post.title}</h1>
            <p>{post.text}</p>
         </div>
      </div>
   );
}
export default AboutUsPost;
