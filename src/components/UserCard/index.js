import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, WingBlank, WhiteSpace} from 'antd-mobile';

class UserCard extends Component {
    static propTypes = {
        userList: PropTypes.array.isRequired
    };

    render() {
        const Header = Card.Header;
        const Footer = Card.Body;
        return (
            <div>
                <WingBlank>
                    <WhiteSpace/>
                    {this.props.userList.map(v => (
                        v.avatar ? (
                            <Card key={v._id}>
                                <Header title={v.user} thumb={require(`../img/${v.avatar}.png`)}
                                        extra={<span>{v.title}</span>}>
                                </Header>
                                <Footer>
                                    {v.type === 'boss' ? <div>公司名称:{v.company}</div> : null}
                                    {v.desc.split('\n').map(value => (
                                        <div key={value}>{value}</div>
                                    ))}
                                    {v.type === 'boss' ? <div>薪资:{v.money}</div> : null}
                                </Footer>
                            </Card>
                        ) : null
                    ))}
                </WingBlank>
            </div>
        )
    }
}

export default UserCard