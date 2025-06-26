import { PostType } from "../@types/post";

export const fetchPosts = async (): Promise<PostType[]> => {
  return [
    {
      _id: "1",
      createdBy: {
        _id: "u1",
        username: "sujal",
        avatar: "https://i.pravatar.cc/150?img=10",
      },
      images: [
        "https://picsum.photos/id/1018/600/400",
        "https://picsum.photos/id/1025/600/400",
        "https://picsum.photos/id/1032/600/400",
      ],
      caption: "Enjoying the view 🌄",
      video: undefined,
      comments: [{ _id: "c1", user: "priya", text: "Awesome!", createdAt: "Just now" }],
      reactions: {
        total: 120,
        typeCount: {
          Like: 100,
          Love: 10,
          Wow: 10,
        },
        userReaction: "Like",
      },
      createdAt: "Just now",
    },
    {
      _id: "2",
      createdBy: {
        _id: "u2",
        username: "priya",
        avatar: "https://i.pravatar.cc/150?img=11",
      },
      images: [
        "https://picsum.photos/id/1050/600/400",
        "https://picsum.photos/id/1044/600/400",
      ],
      caption: "My new puppy 🐶",
      video: undefined,
      comments: [
        { _id: "c2", user: "sujal", text: "So cute!", createdAt: "4 minutes ago" },
        { _id: "c3", user: "rahul", text: "Adorable!", createdAt: "3 minutes ago" },
      ],
      reactions: {
        total: 230,
        typeCount: {
          Love: 150,
          Haha: 50,
          Like: 30,
        },
        userReaction: "Love",
      },
      createdAt: "5 minutes ago",
    },
    {
      _id: "3",
      createdBy: {
        _id: "u3",
        username: "rahul",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      images: [
        "https://picsum.photos/id/1037/600/400",
        "https://picsum.photos/id/1033/600/400",
      ],
      caption: "Mountains calling ⛰️",
      video: undefined,
      comments: [],
      reactions: {
        total: 89,
        typeCount: {
          Wow: 40,
          Like: 49,
        },
        userReaction: undefined,
      },
      createdAt: "1 hour ago",
    },
    {
      _id: "4",
      createdBy: {
        _id: "u4",
        username: "anita",
        avatar: "https://i.pravatar.cc/150?img=13",
      },
      images: [
        "https://picsum.photos/id/1043/600/400",
        "https://picsum.photos/id/1041/600/400",
      ],
      caption: "Sunset vibes 🌅",
      video: undefined,
      comments: [{ _id: "c4", user: "priya", text: "Gorgeous sky!", createdAt: "1 hour ago" }],
      reactions: {
        total: 150,
        typeCount: {
          Love: 80,
          Like: 70,
        },
        userReaction: "Love",
      },
      createdAt: "2 hours ago",
    },
    {
      _id: "5",
      createdBy: {
        _id: "u5",
        username: "nitesh",
        avatar: "https://i.pravatar.cc/150?img=14",
      },
      images: [
        "https://picsum.photos/id/1052/600/400",
        "https://picsum.photos/id/1051/600/400",
        "https://picsum.photos/id/1047/600/400",
      ],
      caption: "City lights ✨",
      video: undefined,
      comments: [
        { _id: "c5", user: "rahul", text: "Epic shot!", createdAt: "20 hours ago" },
        { _id: "c6", user: "anita", text: "Love this!", createdAt: "18 hours ago" },
      ],
      reactions: {
        total: 300,
        typeCount: {
          Like: 120,
          Love: 100,
          Wow: 50,
          Haha: 30,
        },
        userReaction: "Wow",
      },
      createdAt: "Yesterday",
    },
  ];
};
