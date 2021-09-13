import React, {Component} from 'react';
import './App.less';

// 导入路由
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// 导入页面
import Login from './pages/login/login'
import Admin from './pages/admin/admin'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" component={Admin}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
