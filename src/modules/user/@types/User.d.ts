declare global {
  import { UserStatus } from "../@enum/userstatus.enum";
  export interface UserType {
    _id: string;
    username: string;
    email: string;
    isPrivate: boolean;
    avatar: string;
    blockList: string[];
    roles: string[];
    status: UserStatus;
    friends: string[];
    createdAt: string;
    deletedAt?: string;
  }
}

export {};
