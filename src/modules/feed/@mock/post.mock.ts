import { Reaction } from "../@enums/reaction.enum";

export const MOCK_POSTS: PostType[] = [
  {
    _id: "1",
    createdBy: {
      _id: "u1",
      username: "travel_lover",
      avatar: "https://i.pravatar.cc/150?img=1",
      email: "",
      isPrivate: false,
      blockList: [],
      roles: [],
      status: "Active",
      friends: [],
      createdAt: "",
    },
    images: ["https://picsum.photos/id/1018/600/600"],
    caption: "Beautiful sunset at the beach today! 🌅 #vacation",
    video: undefined,
    comments: [
      { 
        _id: "c1", 
        user: "nature_photographer", 
        text: "Amazing shot! Where is this?", 
        createdAt: "2 hours ago" 
      },
      { 
        _id: "c2", 
        user: "beach_bum", 
        text: "Wish I was there!", 
        createdAt: "1 hour ago" 
      },
    ],
    reactions: {
      total: 243,
      typeCount: {
        [Reaction.Like]: 200,
        [Reaction.Love]: 40,
        [Reaction.Wow]: 3,
      },
      userReaction: Reaction.Like,
    },
    createdAt: "3 hours ago",
  },
  {
    _id: "2",
    createdBy: {
      _id: "u2",
      username: "foodie_adventures",
      avatar: "https://i.pravatar.cc/150?img=2",
      email: "",
      isPrivate: false,
      blockList: [],
      roles: [],
      status: "Active",
      friends: [],
      createdAt: "",
    },
    images: ["https://picsum.photos/id/102/600/600"],
    caption: "Homemade pasta for dinner tonight 🍝 #foodie",
    video: undefined,
    comments: [
      { 
        _id: "c3", 
        user: "chef_mike", 
        text: "Looks delicious! Recipe?", 
        createdAt: "5 hours ago" 
      },
      { 
        _id: "c4", 
        user: "pasta_lover", 
        text: "Yum! 😋", 
        createdAt: "4 hours ago" 
      },
      { 
        _id: "c5", 
        user: "cooking_newbie", 
        text: "How long did it take to make?", 
        createdAt: "3 hours ago" 
      },
    ],
    reactions: {
      total: 187,
      typeCount: {
        [Reaction.Love]: 120,
        [Reaction.Like]: 67,
      },
      userReaction: Reaction.Love,
    },
    createdAt: "6 hours ago",
  },
  {
    _id: "3",
    createdBy: {
      _id: "u3",
      username: "fitness_guru",
      avatar: "https://i.pravatar.cc/150?img=3",
      email: "",
      isPrivate: false,
      blockList: [],
      roles: [],
      status: "Active",
      friends: [],
      createdAt: "",
    },
    images: ["https://picsum.photos/id/1050/600/600 ","https://picsum.photos/id/102/600/600"],
    caption: "Morning workout complete! 💪 #fitnessmotivation",
    video: undefined,
    comments: [
      { 
        _id: "c6", 
        user: "gym_buddy", 
        text: "Killing it!", 
        createdAt: "1 day ago" 
      },
    ],
    reactions: {
      total: 312,
      typeCount: {
        [Reaction.Like]: 250,
        [Reaction.Love]: 50,
        [Reaction.Wow]: 12,
      },
      userReaction: null,
    },
    createdAt: "1 day ago",
  },
  {
    _id: "4",
    createdBy: {
      _id: "u4",
      username: "pet_lover",
      avatar: "https://i.pravatar.cc/150?img=4",
      email: "",
      isPrivate: false,
      blockList: [],
      roles: [],
      status: "Active",
      friends: [],
      createdAt: "",
    },
    images: ["https://picsum.photos/id/1062/600/600"],
    caption: "My new puppy Max! 🐶 #dogsofinstagram",
    video: undefined,
    comments: [
      { 
        _id: "c7", 
        user: "dog_trainer", 
        text: "So cute! What breed?", 
        createdAt: "2 days ago" 
      },
      { 
        _id: "c8", 
        user: "animal_rescuer", 
        text: "Adorable! 😍", 
        createdAt: "2 days ago" 
      },
    ],
    reactions: {
      total: 421,
      typeCount: {
        [Reaction.Love]: 350,
        [Reaction.Like]: 70,
        [Reaction.Haha]: 1,
      },
      userReaction: Reaction.Love,
    },
    createdAt: "2 days ago",
  },
  {
    _id: "5",
    createdBy: {
      _id: "u5",
      username: "tech_enthusiast",
      avatar: "https://i.pravatar.cc/150?img=5",
      email: "",
      isPrivate: false,
      blockList: [],
      roles: [],
      status: "Active",
      friends: [],
      createdAt: "",
    },
    images: ["https://picsum.photos/id/119/600/600"],
    caption: "Just got the new smartphone! #tech",
    video: undefined,
    comments: [
      { 
        _id: "c9", 
        user: "gadget_reviewer", 
        text: "How's the camera?", 
        createdAt: "3 days ago" 
      },
      { 
        _id: "c10", 
        user: "phone_lover", 
        text: "Nice! Thinking of upgrading too", 
        createdAt: "3 days ago" 
      },
    ],
    reactions: {
      total: 89,
      typeCount: {
        [Reaction.Like]: 80,
        [Reaction.Wow]: 9,
      },
      userReaction: Reaction.Like,
    },
    createdAt: "3 days ago",
  },
  {
    _id: "6",
    createdBy: {
      _id: "u6",
      username: "bookworm",
      avatar: "https://i.pravatar.cc/150?img=6",
      email: "",
      isPrivate: false,
      blockList: [],
      roles: [],
      status: "Active",
      friends: [],
      createdAt: "",
    },
    images: ["https://picsum.photos/id/24/600/600"],
    caption: "Current read - highly recommend! 📚 #bookstagram",
    video: undefined,
    comments: [
      { 
        _id: "c11", 
        user: "literature_lover", 
        text: "One of my favorites!", 
        createdAt: "4 days ago" 
      },
      { 
        _id: "c12", 
        user: "reading_rainbow", 
        text: "Added to my list!", 
        createdAt: "4 days ago" 
      },
    ],
    reactions: {
      total: 134,
      typeCount: {
        [Reaction.Like]: 120,
        [Reaction.Love]: 14,
      },
      userReaction: null,
    },
    createdAt: "4 days ago",
  },
  {
    _id: "7",
    createdBy: {
      _id: "u7",
      username: "music_producer",
      avatar: "https://i.pravatar.cc/150?img=7",
      email: "",
      isPrivate: false,
      blockList: [],
      roles: [],
      status: "Active",
      friends: [],
      createdAt: "",
    },
    images: ["https://picsum.photos/id/1040/600/600"],
    caption: "New track dropping soon! 🎵 #musicproduction",
    video: undefined,
    comments: [
      { 
        _id: "c13", 
        user: "dj_fan", 
        text: "Can't wait!", 
        createdAt: "5 days ago" 
      },
    ],
    reactions: {
      total: 276,
      typeCount: {
        [Reaction.Like]: 200,
        [Reaction.Love]: 70,
        [Reaction.Wow]: 6,
      },
      userReaction: Reaction.Love,
    },
    createdAt: "5 days ago",
  },
  {
    _id: "8",
    createdBy: {
      _id: "u8",
      username: "art_creator",
      avatar: "https://i.pravatar.cc/150?img=8",
      email: "",
      isPrivate: false,
      blockList: [],
      roles: [],
      status: "Active",
      friends: [],
      createdAt: "",
    },
    images: ["https://picsum.photos/id/28/600/600"],
    caption: "Latest painting complete! 🎨 #art",
    video: undefined,
    comments: [
      { 
        _id: "c14", 
        user: "art_collector", 
        text: "Beautiful work!", 
        createdAt: "1 week ago" 
      },
      { 
        _id: "c15", 
        user: "creative_mind", 
        text: "What medium did you use?", 
        createdAt: "1 week ago" 
      },
    ],
    reactions: {
      total: 198,
      typeCount: {
        [Reaction.Love]: 150,
        [Reaction.Like]: 48,
      },
      userReaction: Reaction.Love,
    },
    createdAt: "1 week ago",
  },
  {
    _id: "9",
    createdBy: {
      _id: "u9",
      username: "fashion_icon",
      avatar: "https://i.pravatar.cc/150?img=9",
      email: "",
      isPrivate: false,
      blockList: [],
      roles: [],
      status: "Active",
      friends: [],
      createdAt: "",
    },
    images: ["https://picsum.photos/id/82/600/600"],
    caption: "New outfit for the season! 👗 #fashion",
    video: undefined,
    comments: [
      { 
        _id: "c16", 
        user: "style_advisor", 
        text: "Love this look!", 
        createdAt: "1 week ago" 
      },
      { 
        _id: "c17", 
        user: "trend_watcher", 
        text: "Where are the shoes from?", 
        createdAt: "1 week ago" 
      },
    ],
    reactions: {
      total: 342,
      typeCount: {
        [Reaction.Love]: 300,
        [Reaction.Like]: 42,
      },
      userReaction: Reaction.Love,
    },
    createdAt: "1 week ago",
  },
  {
    _id: "10",
    createdBy: {
      _id: "u10",
      username: "coffee_addict",
      avatar: "https://i.pravatar.cc/150?img=10",
      email: "",
      isPrivate: false,
      blockList: [],
      roles: [],
      status: "Active",
      friends: [],
      createdAt: "",
    },
    images: ["https://picsum.photos/id/30/600/600"],
    caption: "Perfect latte art this morning ☕ #coffee",
    video: undefined,
    comments: [
      { 
        _id: "c18", 
        user: "barista_pro", 
        text: "Nice pour!", 
        createdAt: "2 weeks ago" 
      },
      { 
        _id: "c19", 
        user: "caffeine_fiend", 
        text: "I need one right now!", 
        createdAt: "2 weeks ago" 
      },
    ],
    reactions: {
      total: 157,
      typeCount: {
        [Reaction.Like]: 120,
        [Reaction.Love]: 37,
      },
      userReaction: Reaction.Like,
    },
    createdAt: "2 weeks ago",
  },
];