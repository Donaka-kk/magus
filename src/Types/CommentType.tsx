import { ScoreType } from "./ScoreType";
export interface CommentType {
   id: number;
   authorFullName: string;
   authorImage: string;
   date: string;
   time: string;
   message: string;
   score: ScoreType;
}
