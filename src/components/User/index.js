import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logoutSubmit} from '../../store/user.redux'
import {Result, List, WhiteSpace, Modal} from 'antd-mobile';
import cookies from 'browser-cookies';
import {Redirect} from 'react-router-dom';

@connect(
    state => state.user,
    {logoutSubmit}
)
class User extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout = () => {
        const alert = Modal.alert;
        alert('退出登录', '确定退出?', [
            {
                text: '取消', onPress: () => {
                    console.log('cancel')
                }
            },
            {
                text: '确定', onPress: () => {
                    cookies.erase('userId');
                    this.props.logoutSubmit()
                }
            },
        ]);
    };

    render() {
        const {avatar, user, type, company, title, desc, money, redirectTo} = this.props;
        const Item = List.Item;
        const Brief = Item.Brief;
        return (
            user ?
                <div className='page-content'>
                    <Result
                        img={<img src={require(`../img/${avatar}.png`)} width={50} alt=""/>}
                        title={user}
                        message={type === 'boss' ? company : null}
                    />
                    <List renderHeader={() => '简介'}>
                        <Item multipleLine>
                            {title}
                            {desc.split('\n').map(v => <Brief key={v}>{v}</Brief>)}
                            {money ? <Brief>薪资{money}</Brief> : null}
                        </Item>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <List onClick={this.handleLogout}>
                        <Item>退出登录</Item>
                    </List>
                </div>
                : <Redirect to={redirectTo}/>

        )
    }
}

export default User