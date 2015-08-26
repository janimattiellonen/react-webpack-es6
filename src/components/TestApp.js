import React from 'react';
import Router, {RouteHandler} from 'react-router';
import { connect } from 'react-redux';

import * as CourseActions from '../actions/CourseActions';
import * as GameActions from '../actions/GameActions';
import * as PlayerActions from '../actions/PlayerActions';
import { bindActionCreators } from 'redux';

@connect(state => {
    return {
        courses: state.course.courses,
        d: state.course.d,
        selectedCourse: state.course.selectedCourse
    }
})    
export default class TestApp extends React.Component {
    render() {

        const { dispatch } = this.props;
        const courseActions = bindActionCreators(CourseActions, dispatch);
        const gameActions = bindActionCreators(GameActions, dispatch);
        const playerActions = bindActionCreators(PlayerActions, dispatch);

        return (
            <div>
                {this.props.children && React.cloneElement(
                    this.props.children,
                    {
                        courses: this.props.courses,
                        selectedCourse: this.props.selectedCourse,
                        d: this.props.d,

                        courseActions: courseActions,
                        gameActions: gameActions,
                        playerActions: playerActions
                    }
                )}
            </div>
        );
    } 
};
