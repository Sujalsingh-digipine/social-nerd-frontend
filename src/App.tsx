
import { Route, Routes } from "react-router-dom";
import RegisterForm from "./modules/auth/register";

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
};

export default App;
