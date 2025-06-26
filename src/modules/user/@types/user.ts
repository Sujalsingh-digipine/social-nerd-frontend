export type UserStatus = "Active" | "Inactive" | "Suspended";

export interface UserType {
  _id: string;
  username: string;
  email?: string;
  password?: string; 
  isPrivate?: boolean;
  avatar: string;
  blockList?: string[]; 
  roles?: string[];
  status?: UserStatus;
  friends?: string[]; 
  createdAt?: string;
  deletedAt?: string;
}
