import React, {Component} from 'react';
// 导入组件
import {Typography, Form, Input, Button, Checkbox} from 'antd';
// 导入图标
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// 导入样式
import './login.less';

const {Title} = Typography

// 登录页面
class Login extends Component {
    onFinish = (values: any) => {
        console.log('Success:', values);
    };
    render() {
        return (
            <div className='login'>
                <div className="login-header">
                    <Title level={2} className='login-header_title'>React Antd 后台管理</Title>
                </div>
                <div className="login-content">
                    <div className="login-content_title">登录系统</div>
                    <Form
                        name="loginForm"
                        className="login-content_form"
                        size="large"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '请输入用户名！' }]}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                allowClear
                                placeholder="请输入用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入密码！' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                allowClear
                                placeholder="请输入密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Checkbox className="login-form-remember">记住密码</Checkbox>
                            <a className="login-form-forgot" href="">
                                忘记密码
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;
