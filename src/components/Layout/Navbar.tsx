import {
  Avatar,
  Dropdown,
  MenuProps,
  Space,
  Button,
  Badge,
  Popover,
  Tooltip,
} from "antd";
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { AiOutlineHome } from "react-icons/ai";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { TbMessageCircleUser } from "react-icons/tb";
const Navbar = () => {
  const navigate = useNavigate();

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
  const friendRequests = [
    {
      _id: 1,
      name: "John Doe",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      _id: 2,
      name: "Jane Doe",
      avatar: "https://i.pravatar.cc/150?img=33",
    },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md sticky top-0 z-50">
      <div
        className="text-xl font-bold text-pink-600 cursor-pointer"
        onClick={() => navigate("/")}
      >
        SocialNerd
      </div>

      <div className="flex gap-6 text-gray-700 items-center">
        <Button type="text" onClick={() => navigate("/")}>
          <Tooltip title="Home" placement="bottom" arrow={false}>
            <AiOutlineHome className="text-xl mt-[2px]" />
          </Tooltip>
        </Button>
        <Link to="/messages">
          <Badge count={5} size="small">
            <Tooltip title="Messages" placement="bottom" arrow={false}>
              <TbMessageCircleUser className="text-xl mt-[2px]" />
            </Tooltip>
          </Badge>
        </Link>
        <Button type="text" onClick={() => navigate("/add-posts")}>
          <Tooltip title="Add Post" placement="bottom" arrow={false}>
            <IoAddCircleOutline className="text-xl mt-[2px] " />
          </Tooltip>
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Popover
          placement="bottomRight"
          trigger={"click"}
          content={
            <div className="w-64">
              <h4 className="font-semibold mb-2">Friend Requests</h4>
              {friendRequests.map((user) => (
                <div
                  key={user._id}
                  className="flex items-center justify-between mb-3"
                >
                  <div className="flex items-center gap-2">
                    <Avatar size={"small"} src={user.avatar} />
                    <span>{user.name}</span>
                  </div>
                  <div className="flex gap-1">
                    <Button type="primary" size="small">
                      Accept
                    </Button>
                    <Button danger size="small">
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          }
        >
          <Badge count={friendRequests.length} overflowCount={4} size="small">
            <Avatar.Group>
              <Avatar src="https://i.pravatar.cc/150?img=20" />
              <Avatar src="https://i.pravatar.cc/150?img=12" />
            </Avatar.Group>
          </Badge>
        </Popover>

        <Dropdown
          menu={{ items, onClick: handleMenuClick }}
          placement="bottomRight"
          arrow
        >
          <Space className="cursor-pointer">
            <Avatar src="https://i.pravatar.cc/150?img=13" />
          </Space>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
