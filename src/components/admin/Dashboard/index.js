import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
  SlackOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";

const { Header, Content, Footer, Sider } = Layout;

if (typeof document === "undefined") {
  React.useLayoutEffect = React.useEffect;
}

function Dashboard({ children }) {
  const router = useRouter();
  const pathName = router.pathname.split("/");
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[pathName[2] ? pathName[2] : pathName[1]]}
          mode="inline"
        >
          <Menu.Item key="admin" icon={<PieChartOutlined />}>
            <Link href="/admin/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="crop" icon={<SlackOutlined />}>
            <Link href="/admin/crop">Crops</Link>
          </Menu.Item>
          <Menu.Item key="user" icon={<UserOutlined />}>
            <Link href="/admin/user">User</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          Admin Crops ©2021 Created by Nguyen Thi Thu Trang
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
