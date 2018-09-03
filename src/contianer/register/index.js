import React, {Component} from 'react';
import {connect} from 'react-redux';
import {register} from '../../store/user.redux';
import {Redirect} from 'react-router-dom';
import Logo from '../../components/logo/Logo'
import {List, Radio, InputItem, Button, WingBlank, WhiteSpace} from 'antd-mobile';
import HighForm from '../../components/HighForm';

const RadioItem = Radio.RadioItem;

@connect(
    state => state.user,
    {register}
)
@HighForm
class Register extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
    }

    componentDidMount() {
        this.props.handleChange('type', 'genius')
    }

    handleRegister = () => {
        this.props.register(this.props.state);
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
                        <InputItem onChange={v => this.props.handleChange('user', v)}>用户</InputItem>
                        <InputItem type='password' onChange={v => this.props.handleChange('pwd', v)}>密码</InputItem>
                        <InputItem type='password'
                                   onChange={v => this.props.handleChange('repeatpwd', v)}>确认密码</InputItem>
                        <RadioItem
                            checked={this.props.state.type === 'genius'}
                            onChange={() => this.props.handleChange('type', 'genius')}
                        >
                            牛人
                        </RadioItem>
                        <RadioItem
                            checked={this.props.state.type === 'boss'}
                            onChange={() => this.props.handleChange('type', 'boss')}
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