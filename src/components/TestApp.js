import React from 'react';
import Router, {RouteHandler} from 'react-router';

export default React.createClass({

    getInitialState() {
        return {

        };
    },

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});
