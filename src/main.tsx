import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#9E339F",
            colorLink: "#E1306C",
            borderRadius: 16,
            fontFamily: "Inter, sans-serif",
          },
        }}
      >
        <Layout />
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>
);
