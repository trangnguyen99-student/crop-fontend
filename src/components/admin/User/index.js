import React from "react";
import Dashboard from "../Dashboard";
import { Breadcrumb } from "antd";

function User() {
  return (
    <Dashboard>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        Bill is a cat.
      </div>
    </Dashboard>
  );
}

export default User;
