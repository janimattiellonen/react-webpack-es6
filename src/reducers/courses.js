import { handleActions } from 'redux-actions';
import { List } from 'immutable';

export default handleActions({

	SET_COURSES: (state, action) => {
		console.log("nut: " + JSON.stringify(action.courses));

		return {
			...state,
			courses: action.courses
		};
	},

	GET_COURSES: (state, action) => {
		return {
			...state,
			courses: state.courses
		};
	},

	SELECTED_COURSE: (state, action) => {
		let courses = state.courses.filter(course => course.value == action.id);
		console.log("lussendorff: " + JSON.stringify(state.courses));
		console.log("filtered: " + JSON.stringify(courses));
		
		return {
			...state,
			course: courses.size == 1 ? courses.get(0) : null
		};
	}

}, List());