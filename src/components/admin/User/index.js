import React from "react";
import Dashboard from "../Dashboard";
import { Breadcrumb } from "antd";

function User({ children, url }) {
  return (
    <Dashboard>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
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

export default User;
