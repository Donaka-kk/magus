import { useState } from "react";
import { ProductSchemeType } from "../../Types/ProductType.tsx";
import { CommentType } from "../../Types/CommentType.tsx";
import { ScoreType } from "../../Types/ScoreType.tsx";
import RatingBars from "../Rating/RatingBars.tsx";
import Comment from "./Comment.tsx";

interface AdditionalInfoProps {
   product: ProductSchemeType;
}

/* ---------------- Sections ---------------- */

function DescriptionSection({
   description,
   score,
}: {
   description: string;
   score: ScoreType;
}) {
   return (
      <div className="space-y-4">
         <p>{description}</p>
         <RatingBars score={score} />
      </div>
   );
}

function CommentsSection({ comments }: { comments: CommentType[] }) {
   return (
      <div className="flex flex-col gap-3">
         {comments.map((comment, idx) => (
            <Comment key={idx} comment={comment} />
         ))}
      </div>
   );
}

/* ---------------- Tabs ---------------- */

const Tabs = ({
   active,
   onChange,
}: {
   active: "description" | "comments";
   onChange: (value: "description" | "comments") => void;
}) => {
   const tabClasses = (tab: string) =>
      `border-b-4 pb-1 transition-all ${
         active === tab
            ? "border-primary font-semibold -mb-1"
            : "border-transparent hover:scale-105 -mb-1"
      }`;

   return (
      <div className="flex gap-6 border-b-4 border-gray-300">
         <button
            onClick={() => onChange("description")}
            className={tabClasses("description")}
         >
            Description
         </button>
         <button
            onClick={() => onChange("comments")}
            className={tabClasses("comments")}
         >
            Comments
         </button>
      </div>
   );
};

/* ---------------- Main Component ---------------- */

export default function AdditionalInfo({ product }: AdditionalInfoProps) {
   const [activeSection, setActiveSection] = useState<
      "description" | "comments"
   >("description");

   const content = {
      description: (
         <DescriptionSection
            description={product.description}
            score={product.score}
         />
      ),
      comments: <CommentsSection comments={product.comments} />,
   }[activeSection];

   return (
      <div className="flex flex-col h-[400px]">
         {/* height controls the scrollable area */}

         <Tabs active={activeSection} onChange={setActiveSection} />

         <div className="flex-1 overflow-y-auto pr-2">{content}</div>
      </div>
   );
}
