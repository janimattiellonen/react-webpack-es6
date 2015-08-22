import React from 'react';
import Router, {RouteHandler} from 'react-router';
import { connect } from 'react-redux';

import * as PlayerActions from '../actions/PlayerActions';
import { bindActionCreators } from 'redux';

//export default React.createClass({

@connect(state => {
    return {}
})    
export default class TestApp extends React.Component {
    render() {

        const { dispatch } = this.props;
        const playerActions = bindActionCreators(PlayerActions, dispatch);

        return (
            <div>
                {this.props.children && React.cloneElement(
                    this.props.children,
                    {
                        playerActions: playerActions
                    }
                )}
            </div>
        );
    }
};
