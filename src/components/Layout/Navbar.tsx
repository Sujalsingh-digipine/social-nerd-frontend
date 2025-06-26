import { Avatar, Dropdown, MenuProps, Space, Button } from "antd"
import { DownOutlined, LogoutOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
      case "profile":
        navigate("/profile")
        break
      case "settings":
        navigate("/settings")
        break
      case "logout":
        localStorage.clear()
        navigate("/auth/login")
        break
    }
  }

  const items: MenuProps['items'] = [
    {
      label: "Profile",
      key: "profile",
      icon: <UserOutlined />,
    },
    {
      label: "Settings",
      key: "settings",
      icon: <SettingOutlined />,
    },
    {
      type: "divider",
    },
    {
      label: "Logout",
      key: "logout",
      icon: <LogoutOutlined />,
      danger: true,
    },
  ]

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md sticky top-0 z-50">
      
      <div className="text-xl font-bold text-pink-600 cursor-pointer" onClick={() => navigate("/")}>
        SocialNerd
      </div>

      
      <div className="hidden md:flex gap-6 text-gray-700">
        <Button type="text" onClick={() => navigate("/")}>Home</Button>
        <Button type="text" onClick={() => navigate("/explore")}>Explore</Button>
        <Button type="text" onClick={() => navigate("/messages")}>Messages</Button>
      </div>

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
    </nav>
  )
}

export default Navbar
