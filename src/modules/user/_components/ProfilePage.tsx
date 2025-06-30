import { useState } from "react";
import { Avatar, Button, Image, List, Switch, Tabs, Tag } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { TiUserAdd } from "react-icons/ti";
import PostPreviewDialog from "../../feed/_components/PostPreview";

const samplePosts = Array.from(
  { length: 9 },
  (_, i) => `https://picsum.photos/seed/${i + 1}/600/400`
);
const sampleFriends = Array.from({ length: 5 }, (_, i) => ({
  id: `u${i + 1}`,
  username: `friend${i + 1}`,
  avatar: `https://i.pravatar.cc/150?img=${i + 20}`,
  following: true,
}));

const user = {
  avatar: "https://i.pravatar.cc/150?img=10",
  username: "sujal_dev",
  email: "sujal@example.com",
  status: "Active",
  friends: sampleFriends,
};

export const ProfilePage = () => {
  const [isPrivate, setIsPrivate] = useState(true);
  const [friends, setFriends] = useState(sampleFriends);
  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);
  const [postOpen, setPostOpen] = useState(false);

  const handleMessage = () => {
    console.log("Open chat with", user.username);
  };

  const handlePostClick = (post: PostType) => {
    setSelectedPost(post);
    setPostOpen(true);
  };

  const closePost = () => {
    setSelectedPost(null);
    setPostOpen(false);
  };

  const handleFollowRequest = () => {
    console.log(
      isPrivate ? "Request to follow private user" : "Follow public user"
    );
  };
  const toggleFollow = (friendId: string) => {
    setFriends((prev) =>
      prev.map((f) =>
        f.id === friendId ? { ...f, following: !f.following } : f
      )
    );
  };

  const handlePrivacyToggle = (checked: boolean) => {
    setIsPrivate(checked);
    console.log("Privacy set to", checked ? "Private" : "Public");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-10 space-y-4 sm:space-y-0">
        <div className="flex justify-center sm:justify-start">
          <Avatar
            size={100}
            src={user.avatar}
            icon={<UserOutlined />}
            className="border border-gray-300 shadow-md"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <h2 className="text-2xl font-semibold">{user.username}</h2>
            <Tag color="green" className="text-sm">
              {user.status}
            </Tag>
            {isPrivate && (
              <Tag icon={<LockOutlined />} color="default" className="text-sm">
                Private
              </Tag>
            )}
          </div>

          <p className="text-sm text-gray-600 mb-4">{user.email}</p>

          <div className="flex flex-wrap items-center gap-4">
            <Button onClick={handleMessage} type="primary">
              <HiOutlineChatBubbleOvalLeftEllipsis />
              Message
            </Button>
            <Button type="primary" onClick={handleFollowRequest}>
              <TiUserAdd />
              {isPrivate ? "Request Friend" : "Add Friend"}
            </Button>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Private</span>
              <Switch checked={isPrivate} onChange={handlePrivacyToggle} />
            </div>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      <hr className="my-6 border-gray-300" />

      <Tabs defaultActiveKey="posts" className="mt-4">
        <Tabs.TabPane tab="Posts" key="posts">
          <div className="grid grid-cols-3 gap-2 mt-4">
            {samplePosts.map((src, index) => {
              const mockPost: PostType = {
                _id: `post-${index + 1}`,
                caption: `Post ${index + 1}`,
                images: [src],
                createdAt: "Just now",
                createdBy: {
                  _id: "u1",
                  username: user.username,
                  avatar: user.avatar,
                  email: user.email,
                  isPrivate,
                  status: user.status as any,
                  blockList: [],
                  roles: ["user"],
                  friends: [],
                  createdAt: new Date().toISOString(),
                },
                reactions: {
                  total: 0,
                  typeCount: {},
                  userReaction: null,
                },
                comments: [],
              };

              return (
                <Image
                  key={index}
                  src={src}
                  alt={`post-${index}`}
                  className="object-cover aspect-square w-full cursor-pointer"
                  preview={false}
                  onClick={() => handlePostClick(mockPost)}
                />
              );
            })}
          </div>
        </Tabs.TabPane>

        <Tabs.TabPane tab={`Friends (${user.friends.length})`} key="friends">
          <List
            itemLayout="horizontal"
            dataSource={friends}
            className="mt-4"
            renderItem={(friend) => (
              <List.Item
                actions={[
                  <Button
                    key="follow"
                    type={friend.following ? "default" : "primary"}
                    danger={friend.following}
                    onClick={() => toggleFollow(friend.id)}
                  >
                    {friend.following ? "Unfollow" : "Follow"}
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={friend.avatar} />}
                  title={<a href={`/user/${friend.id}`}>{friend.username}</a>}
                />
              </List.Item>
            )}
          />
        </Tabs.TabPane>
      </Tabs>
      <PostPreviewDialog
        open={postOpen}
        onClose={closePost}
        post={selectedPost}
      />
    </div>
  );
};
