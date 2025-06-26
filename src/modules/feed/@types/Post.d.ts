import { Reaction } from "../@enums/reaction.enum";

declare global {
  // import { UserType } from "../../user/@types/user";

  export interface ReactionSummary {
    total: number;
    typeCount: Partial<Record<Reaction, number>>;
    userReaction?: Reaction;
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
}
export {};
