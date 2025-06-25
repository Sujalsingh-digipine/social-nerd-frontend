import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import App from "../../App";

const Layout = () => {
  const location = useLocation();
  const isAuthRoute =
    location.pathname.includes("/login") ||
    location.pathname.includes("/register");

  if (isAuthRoute) {
    return <App />;
  }

  return (
    <>
      <Navbar />
      <App />
    </>
  );
};

export default Layout;
