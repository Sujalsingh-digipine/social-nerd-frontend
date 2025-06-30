import { Route, Routes } from "react-router-dom";
import RegisterForm from "./modules/auth/Register";
import Login from "./modules/auth/Login";
import HomeFeed from "./modules/feed/Feed";
import AddPost from "./modules/addPost/_components/addPost";
import { ProfilePage } from "./modules/user/_components/ProfilePage";


const App = () => {
  return (
    <Routes>
      <Route path="/auth/register" element={<RegisterForm />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/" element={<HomeFeed />} />
      <Route path="/add-posts" element={<AddPost />} />
      <Route path="/profile" element={<ProfilePage  />} />
    </Routes>
  );
};

export default App;
