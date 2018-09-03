import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, WingBlank, WhiteSpace} from 'antd-mobile';
import {getUserList} from '../../store/chatuser.redux';

@connect(
    state => state.chatuser,
    {getUserList}
)
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.props.getUserList('genius');
    }

    render() {
        const Header = Card.Header;
        const Footer = Card.Body;
        return (
            <div className='page-content'>
                <WingBlank>
                    <WhiteSpace/>
                    {this.props.userList.map(v => (
                        v.avatar ? (
                            <Card key={v._id}>
                                <Header title={v.user} thumb={require(`../img/${v.avatar}.png`)}
                                        extra={<span>{v.title}</span>}>
                                </Header>
                                <Footer>
                                    {v.desc.split('\n').map(value => (
                                        <div key={value}>{value}</div>
                                    ))}
                                </Footer>
                            </Card>
                        ) : null
                    ))}
                </WingBlank>
            </div>
        )
    }
}

export default Boss