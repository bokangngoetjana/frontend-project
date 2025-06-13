"use client"
import {Button, Layout, Typography, Row, Col} from "antd";
import Link from "next/link";
import '@ant-design/v5-patch-for-react-19';

const {Header, Content, Footer} = Layout;
const {Title, Paragraph} = Typography;

const Home = () => {
  return(
    <Layout>
      <Header style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Title level={3} style={{color: "white", margin: 0}}>
          Authentication 
        </Title>
        <div>
          <Link href="/login"><Button type="link" style={{color: "white"}}>Login</Button></Link>
          <Link href="/register"><Button type="primary">Register</Button></Link>
        </div>
      </Header>
      <Content style={{padding: "80px 50px", minHeight: "80vh"}}>
        <Row justify="center" align="middle">
          <Col xs={24} md={12} style={{ textAlign: "center" }}>
            <Title>Welcome to MyApp</Title>
            <Paragraph style={{ fontSize: "16px" }}>
              A modern app built with React, Next.js, Ant Design, and JWT Auth.
            </Paragraph>
            <Link href="/register">
              <Button size="large" type="primary">
                Get Started
              </Button>
            </Link>
          </Col>
        </Row>
      </Content>
      <footer style={{ textAlign: "center"}}>
        MyAuthenticationApp ©{new Date().getFullYear()} Created by Bokang
      </footer>
    </Layout>
  )
}
export default Home;
