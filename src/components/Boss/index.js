import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserList} from '../../store/chatuser.redux';
import UserCard from '../../components/UserCard';

@connect(
    state => state.chatuser,
    {getUserList}
)
class Boss extends Component {
    componentDidMount() {
        this.props.getUserList('genius');
    }

    render() {
        return (
            <div className='page-content'>
                <UserCard userList={this.props.userList}></UserCard>
            </div>
        )
    }
}

export default Boss