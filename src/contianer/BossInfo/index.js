import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile';
import {Redirect} from 'react-router-dom';
import AvatarSelector from '../../components/AvatarSelector'
import {update} from '../../store/user.redux';

@connect(
    state => state.user,
    {update}
)
class BossInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            desc: '',
            company: '',
            money: ''
        }
    }

    onChange(key, val) {
        this.setState({
            [key]: val
        })
    };

    render() {
        const path = this.props.location.pathname;
        const redirect = this.props.redirectTo;
        return (
            <div>
                {redirect && redirect !== path ? <Redirect to={this.props.redirectTo}/> : null}
                <NavBar mode="dark">BOSS完善信息</NavBar>
                <AvatarSelector
                    selectAvatar={(name) => {
                        this.setState({
                            avatar: name
                        })
                    }}
                >
                </AvatarSelector>
                <InputItem onChange={(v) => this.onChange('title', v)}>
                    招聘职位
                </InputItem>
                <InputItem onChange={(v) => this.onChange('company', v)}>
                    公司名称
                </InputItem>
                <InputItem onChange={(v) => this.onChange('money', v)}>
                    职位薪资
                </InputItem>
                <TextareaItem
                    title='职位要求'
                    rows={3}
                    autoHeight
                    onChange={(v) => this.onChange('desc', v)}>
                </TextareaItem>
                <Button type='primary' onClick={() => {
                    this.props.update(this.state)
                }}>保存</Button>
            </div>
        )
    }
}

export default BossInfo;