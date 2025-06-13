'use client'
import React from "react"
import LoginForm from "@/components/auth/loginForm"
import { ConfigProvider } from "antd"

export default function LoginPage() {
  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: "#001529",
        colorBgBase:  "#fefbff",
        colorTextBase: "#000",
        borderRadius: 8,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      },
    }}>
      
    <div>
      <LoginForm />
    </div>
    </ConfigProvider>
  );
}