import { UserType } from "../../user/@types/user";

export type ReactionType = "Like" | "Love" | "Haha" | "Wow" | "Sad" | "Angry";

export interface ReactionSummary {
  total: number;
  typeCount: Partial<Record<ReactionType, number>>; 
  userReaction?: ReactionType; 
}

export interface CommentType {
  _id: string;
  user: UserType | string;
  text: string;
  parentId?: string;
  createdAt: string;
}

export interface PostType {
  _id: string;
  createdBy: UserType | string;
  images: string[];
  caption: string;
  video?: string;
  comments: CommentType[];
  reactions: ReactionSummary;
  createdAt: string;
}
