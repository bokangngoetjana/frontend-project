"use client"
import { useContext } from 'react';
import { Form, Input, Button, Typography, Alert } from 'antd'
import { AuthStateContext } from '@/providers/authProvider/context';

const { Title } = Typography;

const RegisterForm = () => {
  const [form] = Form.useForm();
  const authContext = useContext(AuthStateContext);

  const onFinish = async (values: { email: string; password: string; confirm: string }) => {
    const { email, password } = values;
    const name = email.split('@')[0];

    await authContext.register(name, email, password);
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: '150px 50px', }}>
      <Title level={3}>Register</Title>

      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Invalid email format!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        {authContext.isError && (
          <Alert type="error" message="Registration failed. Try a different email." showIcon style={{ marginBottom: 16 }} />
        )}

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={authContext.isPending}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterForm;
