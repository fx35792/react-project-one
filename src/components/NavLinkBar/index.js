import React, {Component} from 'react';
import {TabBar} from 'antd-mobile';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

@withRouter
class NavLinkBar extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired
    };

    render() {
        const navList = this.props.data.filter(v => !v.hide);
        const {pathname} = this.props.location;
        return (
            <TabBar>
                {navList && navList.map(v => (
                    <TabBar.Item
                        title={v.text}
                        key="Life"
                        icon={{uri: require(`../navIcon/${v.icon}.png`)}}
                        selectedIcon={{uri: require(`../navIcon/${v.icon}-active.png`)}}
                        selected={pathname === v.path}
                        onPress={() => {
                            this.props.history.push(v.path)
                        }}
                    >
                    </TabBar.Item>
                ))}

            </TabBar>
        )
    }
}

export default NavLinkBar