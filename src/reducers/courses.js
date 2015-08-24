import { handleActions } from 'redux-actions';
import { List } from 'immutable';
import moment from 'moment';

export default handleActions({

	SET_COURSES: (state, action) => {
		
		return {
			...state,
			courses: action.courses,
			d: state.d
		};
	},

	GET_COURSES: (state, action) => {
		console.log("GET_COURSES");
		return {
			...state,
			courses: state.courses
		};
	},

	SELECTED_COURSE: (state, action) => {
		let d = moment(state.d);
		console.log("wweee: " + JSON.stringify(action));
		return {
			...state,
			selectedCourse: action.selectedCourse,
			d: d
		};
	}

}, {courses: List(), d: moment(), selectedCourse: null});