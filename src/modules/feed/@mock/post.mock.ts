import { Reaction } from "../@enums/reaction.enum";

export const MOCK_POSTS = () => {
  const basePosts: PostType[] = [
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
    // ... add 3 more manually for variety
  ];

  // Clone and modify basePosts to get 15 total
  const posts: PostType[] = [];

  for (let i = 0; i < 15; i++) {
    const base = basePosts[i % basePosts.length];
    posts.push({
      ...base,
      _id: (i + 1).toString(),
      caption: `${base.caption} (${i + 1})`,
      createdBy: {
        ...base.createdBy,
        _id: `u${i + 1}`,
        username: `${base.createdBy.username}${i + 1}`,
        avatar: `https://i.pravatar.cc/150?img=${10 + i}`,
      },
      createdAt: `${i + 1} minutes ago`,
    });
  }

  return posts;
};
