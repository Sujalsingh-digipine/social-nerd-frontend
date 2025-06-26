import { Reaction } from "../@enums/Reaction.enum";

export const fetchPosts = async (): Promise<PostType[]> => {
  return [
    {
      _id: "1",
      createdBy: {
        _id: "u1",
        username: "sujal",
        avatar: "https://i.pravatar.cc/150?img=10",
        email: "",
        isPrivate: false,
        blockList: [],
        roles: [],
        status: "Active",
        friends: [],
        createdAt: "",
      },
      images: [
        "https://picsum.photos/id/1018/600/400",
        "https://picsum.photos/id/1025/600/400",
        "https://picsum.photos/id/1032/600/400",
      ],
      caption: "Enjoying the view 🌄",
      video: undefined,
      comments: [
        { _id: "c1", user: "priya", text: "Awesome!", createdAt: "Just now" },
      ],
      reactions: {
        total: 120,
        typeCount: {
          [Reaction.Like]: 100,
          [Reaction.Love]: 10,
          [Reaction.Wow]: 10,
        },
        userReaction: Reaction.Like,
      },
      createdAt: "Just now",
    },
    {
      _id: "2",
      createdBy: {
        _id: "u2",
        username: "priya",
        avatar: "https://i.pravatar.cc/150?img=11",
        email: "",
        isPrivate: false,
        blockList: [],
        roles: [],
        status: "Active",
        friends: [],
        createdAt: "",
      },
      images: [
        "https://picsum.photos/id/1050/600/400",
        "https://picsum.photos/id/1044/600/400",
      ],
      caption: "My new puppy 🐶",
      video: undefined,
      comments: [
        {
          _id: "c2",
          user: "sujal",
          text: "So cute!",
          createdAt: "4 minutes ago",
        },
        {
          _id: "c3",
          user: "rahul",
          text: "Adorable!",
          createdAt: "3 minutes ago",
        },
      ],
      reactions: {
        total: 230,
        typeCount: {
          [Reaction.Love]: 150,
          [Reaction.Haha]: 50,
          [Reaction.Like]: 30,
        },
        userReaction: Reaction.Love,
      },
      createdAt: "5 minutes ago",
    },
    {
      _id: "3",
      createdBy: {
        _id: "u3",
        username: "rahul",
        avatar: "https://i.pravatar.cc/150?img=12",
        email: "",
        isPrivate: false,
        blockList: [],
        roles: [],
        status: "Active",
        friends: [],
        createdAt: "",
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
          [Reaction.Wow]: 40,
          [Reaction.Like]: 49,
        },
        userReaction: Reaction.Haha,
      },
      createdAt: "1 hour ago",
    },
    {
      _id: "4",
      createdBy: {
        _id: "u4",
        username: "anita",
        avatar: "https://i.pravatar.cc/150?img=13",
        email: "",
        isPrivate: false,
        blockList: [],
        roles: [],
        status: "Active",
        friends: [],
        createdAt: "",
      },
      images: [
        "https://picsum.photos/id/1043/600/400",
        "https://picsum.photos/id/1041/600/400",
      ],
      caption: "Sunset vibes 🌅",
      video: undefined,
      comments: [
        {
          _id: "c4",
          user: "priya",
          text: "Gorgeous sky!",
          createdAt: "1 hour ago",
        },
      ],
      reactions: {
        total: 150,
        typeCount: {
          [Reaction.Love]: 80,
          [Reaction.Like]: 70,
        },
        userReaction: Reaction.Love,
      },
      createdAt: "2 hours ago",
    },
    {
      _id: "5",
      createdBy: {
        _id: "u5",
        username: "nitesh",
        avatar: "https://i.pravatar.cc/150?img=14",
        email: "",
        isPrivate: false,
        blockList: [],
        roles: [],
        status: "Active",
        friends: [],
        createdAt: "",
      },
      images: [
        "https://picsum.photos/id/1052/600/400",
        "https://picsum.photos/id/1051/600/400",
        "https://picsum.photos/id/1047/600/400",
      ],
      caption: "City lights ✨",
      video: undefined,
      comments: [
        {
          _id: "c5",
          user: "rahul",
          text: "Epic shot!",
          createdAt: "20 hours ago",
        },
        {
          _id: "c6",
          user: "anita",
          text: "Love this!",
          createdAt: "18 hours ago",
        },
      ],
      reactions: {
        total: 300,
        typeCount: {
          [Reaction.Like]: 120,
          [Reaction.Love]: 100,
          [Reaction.Wow]: 50,
          [Reaction.Haha]: 30,
        },
        userReaction: Reaction.Wow,
      },
      createdAt: "Yesterday",
    },
  ];
};
