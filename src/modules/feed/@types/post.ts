export interface UserType {
  id: string;
  name: string;
  avatar: string;
}

export interface PostType {
  id: string;
  createdBy: UserType;
  images: string[];
  caption: string;
  video?: string;
  likes: number;
  comments: { id: string; user: string; text: string }[];
  createdAt: string;
}
