
import { Route, Routes } from "react-router-dom";
import RegisterForm from "./modules/auth/Register";
import Login from "./modules/auth/Login";
import HomeFeed from "./modules/feed/Feed";

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<HomeFeed />} />
    </Routes>
  );
};

export default App;
