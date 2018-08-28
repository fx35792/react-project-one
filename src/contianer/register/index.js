import React, {Component} from 'react';
import {connect} from 'react-redux';
import {register} from '../../store/user.redux';
import {Redirect} from 'react-router-dom';
import Logo from '../../components/logo/Logo'
import {List, Radio, InputItem, Button, WingBlank, WhiteSpace} from 'antd-mobile';

const RadioItem = Radio.RadioItem;

@connect(
    state => state.user,
    {register}
)
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pwd: '',
            repeatpwd: '',
            type: 'genius',// boss
            msg: '',
        };
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleChange = (key, v) => {
        this.setState({
            [key]: v
        })
    };

    handleRegister = () => {
        this.props.register(this.state);
    };

    render() {
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo/>
                <WingBlank>
                    <WhiteSpace/>

                    <List>
                        {this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
                        <InputItem onChange={v => this.handleChange('user', v)}>用户</InputItem>
                        <InputItem type='password' onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
                        <InputItem type='password' onChange={v => this.handleChange('repeatpwd', v)}>确认密码</InputItem>
                        <RadioItem
                            checked={this.state.type === 'genius'}
                            onChange={() => this.handleChange('type', 'genius')}
                        >
                            牛人
                        </RadioItem>
                        <RadioItem
                            checked={this.state.type === 'boss'}
                            onChange={() => this.handleChange('type', 'boss')}
                        >
                            BOSS
                        </RadioItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.handleRegister}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register;