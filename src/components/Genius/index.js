import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserList} from '../../store/chatuser.redux';
import UserCard from '../../components/UserCard';

@connect(
    state => state.chatuser,
    {getUserList}
)
class Genius extends Component {
    componentDidMount() {
        this.props.getUserList('boss');
    }

    render() {
        return (
            <div className='page-content'>
                <UserCard userList={this.props.userList}></UserCard>
            </div>
        )
    }
}

export default Genius