import React, {Component} from 'react';
// 导入组件
import { Typography } from 'antd';
// 导入样式
import './login.less';
const {Title} = Typography

// 登录页面
class Login extends Component {
    render() {
        return (
            <div className='login'>
                <div className="login-header">
                    <Title level={2} className='login-header_title'>React Antd 后台管理</Title>
                </div>
                <div className="login-content">

                </div>
            </div>
        );
    }
}

export default Login;
