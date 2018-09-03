import React from 'react';

export default function HighForm(Comp) {

    return class WrapperComp extends React.Component {
        constructor(props) {
            super(props)
            this.state = {};
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange = (key, v) => {
            this.setState({
                [key]: v
            });
        }

        render() {
            return <Comp state={this.state} {...this.props} handleChange={this.handleChange}></Comp>
        }
    }

}