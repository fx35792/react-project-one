import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {loadData} from '../../store/user.redux';


@withRouter
@connect(
    null,
    {loadData}
)
class AuthRoute extends Component {
    componentDidMount() {
        const publicList = ['/login', '/register'];
        const pathname = this.props.location.pathname;
        if (publicList.indexOf(pathname) > -1) {
            return null
        }

        axios.get('/user/info')
            .then((res) => {
                //0:登录 1:未登录
                if (res.status === 200) {
                    if (res.data.code === 0) {
                        console.log('登录成功');
                        this.props.loadData(res.data.data);
                    } else {
                        this.props.history.push('/login');
                    }
                }
            })
            .catch(() => {
                console.log('error')
            })
    }

    render() {
        return (<div></div>)
    }
}

export default AuthRoute;