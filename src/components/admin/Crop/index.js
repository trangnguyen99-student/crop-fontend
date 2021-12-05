import React from "react";
import Dashboard from "../Dashboard";
import { Breadcrumb } from "antd";

if (typeof document === "undefined") {
  React.useLayoutEffect = React.useEffect;
}

function Crops({ children, url }) {
  return (
    <Dashboard>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>{url}</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        {children}
      </div>
    </Dashboard>
  );
}

export default Crops;
