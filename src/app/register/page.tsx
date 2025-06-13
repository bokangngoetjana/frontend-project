'use client'
import React from "react"
import { ConfigProvider } from "antd"
import RegisterForm from "@/components/auth/registerForm"
import router from "next/router";

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
      <RegisterForm />
      {/* const success = await login(email, password);
if (success) {
  router.push("/dashboard")
} */}

    </div>
    </ConfigProvider>
    
  );
}