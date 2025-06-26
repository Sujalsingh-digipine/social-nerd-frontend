
import { Route, Routes } from "react-router-dom";
import RegisterForm from "./modules/auth/Register";
import Login from "./modules/auth/Login";
import HomeFeed from "./modules/feed/Feed";

const App = () => {
  return (
    <Routes>
      <Route path="/auth/register" element={<RegisterForm />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/" element={<HomeFeed />} />
    </Routes>
  );
};

export default App;
