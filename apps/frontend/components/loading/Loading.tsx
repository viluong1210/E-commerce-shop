// components/PageLoading.js
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const PageLoading = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <Spin indicator={antIcon} />
    </div>
  );
};

export default PageLoading;
