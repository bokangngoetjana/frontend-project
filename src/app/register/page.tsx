'use client'
import React from "react"
import { ConfigProvider } from "antd";
import RegisterForm from "@/components/auth/registerForm"

export default function RegisterPage() {
  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: "5a2a7f",
        colorBgBase: "#fefbff",
        colorTextBase: "4a285f",
        borderRadius: 8,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      },
    }}>
<div>
      <h1>Register Page</h1>
      <RegisterForm />
    </div>
    </ConfigProvider>
    
  );
}