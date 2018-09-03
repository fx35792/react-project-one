import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {login} from '../../store/user.redux';
import Logo from '../../components/logo/Logo'
import {List, InputItem, Button, WingBlank, WhiteSpace} from 'antd-mobile';
import HighForm from '../../components/HighForm';

@connect(
    state => state.user,
    {login}
)
@HighForm
class Login extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleRegister = () => {
        this.props.history.push('/register')
    };

    handleLogin = () => {
        this.props.login(this.props.state);
    };

    render() {
        return (
            <div>
                {(this.props.redirectTo && this.props.redirectTo !== '/login') ?
                    <Redirect to={this.props.redirectTo}/> : null}
                <Logo/>
                <WingBlank>
                    <WhiteSpace/>
                    <List>
                        {this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
                        <InputItem onChange={v => this.props.handleChange('user', v)}>用户</InputItem>
                        <InputItem onChange={v => this.props.handleChange('pwd', v)} type='password'>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.handleLogin}>登录</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.handleRegister}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login;