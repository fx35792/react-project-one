import React, {Component} from 'react';
import Logo from '../../components/logo/Logo'
import {List, InputItem, Button, WingBlank, WhiteSpace} from 'antd-mobile';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleRegister = () => {
        this.props.history.push('/register')
    };

    render() {
        return (
            <div>
                <Logo/>
                <WingBlank>
                    <WhiteSpace/>
                    <List>
                        <InputItem>用户</InputItem>
                        <InputItem type='password'>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary">登录</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.handleRegister}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login;