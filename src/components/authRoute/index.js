import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

@withRouter
class AuthRoute extends Component {
    componentDidMount() {
        const publicList = ['/login', '/register'];
        const pathname = this.props.location.pathname;
        if (publicList.indexOf(pathname) > -1) {
            return null
        }

        axios.get('/user/info')
            .then((res) => {
                console.log(res.data.code)
                //0:登录 1:未登录
                if (res.data.code === 0) {
                    console.log(11)
                } else {
                    this.props.history.push('/login');
                }
            })
            .catch(() => {
                console.log('error')
            })
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default AuthRoute;