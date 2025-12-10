import Post from "./Post.tsx";

import { PostType } from "../../Types/PostType";

interface PostsListProps {
   posts: PostType[];
   handleMoveUp: (index: number) => void;
   handleMoveDown: (index: number) => void;
   handleEditPost: (post: PostType) => void;
   handleRemovePost: (index: number) => void;
}

function PostsList({
   posts,
   handleMoveUp,
   handleMoveDown,
   handleEditPost,
   handleRemovePost,
}: PostsListProps) {
   return (
      <div className="flex flex-col gap-4 no-overflow-anchoring">
         {posts.map((post, index) => (
            <Post
               key={post.id}
               post={post}
               index={index}
               moveUp={handleMoveUp}
               moveDown={handleMoveDown}
               removePost={handleRemovePost}
               editPost={handleEditPost}
            />
         ))}
      </div>
   );
}

export default PostsList;
