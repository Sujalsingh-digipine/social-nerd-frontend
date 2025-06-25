import { PostType } from "../@types/post";

export const fetchPosts = async (): Promise<PostType[]> => {
  return [
    {
      id: "1",
      createdBy: {
        id: "u1",
        name: "sujal",
        avatar: "https://i.pravatar.cc/150?img=10",
      },
      images: [
        "https://picsum.photos/id/1018/600/400",
        "https://picsum.photos/id/1025/600/400",
        "https://picsum.photos/id/1032/600/400",
      ],
      caption: "Enjoying the view 🌄",
      likes: 120,
      comments: [{ id: "c1", user: "priya", text: "Awesome!" }],
      createdAt: "Just now",
    },
    {
      id: "2",
      createdBy: {
        id: "u2",
        name: "priya",
        avatar: "https://i.pravatar.cc/150?img=11",
      },
      images: [
        "https://picsum.photos/id/1050/600/400",
        "https://picsum.photos/id/1044/600/400",
      ],
      caption: "My new puppy 🐶",
      likes: 230,
      comments: [
        { id: "c2", user: "sujal", text: "So cute!" },
        { id: "c3", user: "rahul", text: "Adorable!" },
      ],
      createdAt: "5 minutes ago",
    },
    {
      id: "3",
      createdBy: {
        id: "u3",
        name: "rahul",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      images: [
        "https://picsum.photos/id/1037/600/400",
        "https://picsum.photos/id/1033/600/400",
      ],
      caption: "Mountains calling ⛰️",
      likes: 89,
      comments: [],
      createdAt: "1 hour ago",
    },
    {
      id: "4",
      createdBy: {
        id: "u4",
        name: "anita",
        avatar: "https://i.pravatar.cc/150?img=13",
      },
      images: [
        "https://picsum.photos/id/1043/600/400",
        "https://picsum.photos/id/1041/600/400",
      ],
      caption: "Sunset vibes 🌅",
      likes: 150,
      comments: [{ id: "c4", user: "priya", text: "Gorgeous sky!" }],
      createdAt: "2 hours ago",
    },
    {
      id: "5",
      createdBy: {
        id: "u5",
        name: "nitesh",
        avatar: "https://i.pravatar.cc/150?img=14",
      },
      images: [
        "https://picsum.photos/id/1052/600/400",
        "https://picsum.photos/id/1051/600/400",
        "https://picsum.photos/id/1047/600/400",
      ],
      caption: "City lights ✨",
      likes: 300,
      comments: [
        { id: "c5", user: "rahul", text: "Epic shot!" },
        { id: "c6", user: "anita", text: "Love this!" },
      ],
      createdAt: "Yesterday",
    },
  ];
};
