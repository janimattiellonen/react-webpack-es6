import React from 'react';
import Router, {RouteHandler} from 'react-router';
import { connect } from 'react-redux';

import * as PlayerActions from '../actions/PlayerActions';
import * as CourseActions from '../actions/CourseActions';

import { bindActionCreators } from 'redux';

@connect(state => {
    return {
        courses: state.course.courses,
        course: state.course
    }
})    
export default class TestApp extends React.Component {
    render() {

        const { dispatch } = this.props;
        const playerActions = bindActionCreators(PlayerActions, dispatch);
        const courseActions = bindActionCreators(CourseActions, dispatch);

        return (
            <div>
                {this.props.children && React.cloneElement(
                    this.props.children,
                    {
                        courses: this.props.courses,
                        course: this.props.course,
                        courseActions: courseActions,
                        playerActions: playerActions
                    }
                )}
            </div>
        );
    }
};
