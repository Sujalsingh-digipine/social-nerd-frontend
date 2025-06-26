import {
  Avatar,
  Badge,
  Dropdown,
  MenuProps,
  Space,
  Button,
  List,
  message,
  Popover,
} from "antd";
import {
  DownOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const [friendRequests, setFriendRequests] = useState([
    {
      id: "1",
      name: "John Doe",
      avatar: "https://i.pravatar.cc/150?img=11",
      status: "pending",
    },
    {
      id: "2",
      name: "Jane Smith",
      avatar: "https://i.pravatar.cc/150?img=14",
      status: "pending",
    },
  ]);

  const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
    switch (key) {
      case "profile":
        navigate("/profile");
        break;
      case "settings":
        navigate("/settings");
        break;
      case "logout":
        localStorage.clear();
        navigate("/auth/login");
        break;
    }
  };

  const items: MenuProps["items"] = [
    { label: "Profile", key: "profile", icon: <UserOutlined /> },
    { label: "Settings", key: "settings", icon: <SettingOutlined /> },
    { type: "divider" },
    { label: "Logout", key: "logout", icon: <LogoutOutlined />, danger: true },
  ];

  const handleAccept = (id: string) => {
    setFriendRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: "accepted" } : req))
    );
    message.success("You are now friends.");
  };

  const handleDelete = (id: string) => {
    setFriendRequests((prev) => prev.filter((req) => req.id !== id));
    message.info("Friend request deleted.");
  };

  const friendPopoverContent = (
    <List
      dataSource={friendRequests}
      locale={{ emptyText: "No Friend Requests" }}
      renderItem={(item) => (
        <List.Item
          key={item.id}
          actions={
            item.status === "pending"
              ? [
                  <Button size="small" onClick={() => handleAccept(item.id)}>
                    Accept
                  </Button>,
                  <Button
                    danger
                    size="small"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>,
                ]
              : [
                  <span className="text-green-600 text-sm font-medium">
                    You are now friends
                  </span>,
                ]
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={item.name}
          />
        </List.Item>
      )}
    />
  );

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md sticky top-0 z-50">
      <div
        className="text-xl font-bold text-pink-600 cursor-pointer"
        onClick={() => navigate("/")}
      >
        SocialNerd
      </div>

      <div className="hidden md:flex gap-6 text-gray-700">
        <Button type="text" onClick={() => navigate("/")}>
          Home
        </Button>
        <Button type="text" onClick={() => navigate("/explore")}>
          Explore
        </Button>
        <Button type="text" onClick={() => navigate("/messages")}>
          Messages
        </Button>
      </div>

      {/* Right Section: Friend Requests + User Menu */}
      <Space size="middle">
        {/* Friend Request Badge */}
        <Popover
          content={friendPopoverContent}
          title="Friend Requests"
          trigger="click"
          placement="bottomRight"
          getPopupContainer={(triggerNode) => triggerNode.parentElement!}
        >
          <Badge
            count={friendRequests.filter((f) => f.status === "pending").length}
            offset={[5, 0]}
          >
            <UserAddOutlined className="text-xl cursor-pointer text-gray-700" />
          </Badge>
        </Popover>

        {/* Avatar Dropdown */}
        <Dropdown
          menu={{ items, onClick: handleMenuClick }}
          placement="bottomRight"
          arrow
        >
          <Space className="cursor-pointer">
            <Avatar src="https://i.pravatar.cc/150?img=13" />
            <DownOutlined className="text-gray-600" />
          </Space>
        </Dropdown>
      </Space>
    </nav>
  );
};

export default Navbar;
