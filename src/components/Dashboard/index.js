import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {NavBar} from 'antd-mobile';

import NavLinkBar from '../../components/NavLinkBar'
import Boss from '../../components/Boss';

function Genius() {
    return <h2>Genius列表</h2>
}

function Msg() {
    return <div>信息列表</div>
}

function User() {
    return <div>个人中心</div>
}

@connect(
    state => state
)
class Dashboard extends Component {

    render() {
        const {pathname} = this.props.location;
        const user = this.props.user;
        const navList = [
            {
                path: '/boss',
                text: '牛人',
                icon: 'boss',
                title: '牛人列表',
                component: Boss,
                hide: user.type === 'genius'
            },
            {
                path: '/genius',
                text: 'boss',
                icon: 'job',
                title: 'BOSS列表',
                component: Genius,
                hide: user.type === 'boss'
            },
            {
                path: '/msg',
                text: '信息',
                icon: 'msg',
                title: '信息列表',
                component: Msg,
            },
            {
                path: '/me',
                text: '我',
                icon: 'user',
                title: '个人中心',
                component: User,
            },

        ];
        return (
            <div>
                <NavBar mode="dark" className='fixd-header'>
                    {/*{navList && navList.map(v => (path === v.path && v.title))}*/}
                    {navList.find(v => v.path === pathname).title}
                </NavBar>
                <Switch>
                    {navList && navList.map(v => (
                        <Route key={v.path} path={v.path} component={v.component}></Route>
                    ))}
                </Switch>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        )
    }
}

export default Dashboard;