// app/dashboard/page.tsx
"use client";

import { Layout, Menu, Typography, Row, Col, Card, Statistic } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const DashboardPage = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider breakpoint="lg" collapsedWidth="0">
        <div style={{ color: "white", padding: "16px", fontSize: "20px" }}>
          MyApp
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Profile
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="4" icon={<LogoutOutlined />}>
            <Link href="/login">Logout</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Content */}
      <Layout>
        <Header style={{ background: "#fff", paddingLeft: 24 }}>
          <Title level={3}>Dashboard</Title>
        </Header>

        <Content style={{ margin: "24px 16px 0" }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card>
                <Statistic title="Users" value={1128} />
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <Statistic title="Tasks Completed" value={93} suffix="/ 100" />
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <Statistic title="Performance" value={82} suffix="%" />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;
