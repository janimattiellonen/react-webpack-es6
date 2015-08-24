import api from '../api';

export function setCourses(courses, d) {
	return {
		type: 'SET_COURSES',
		courses: courses,
		d: d
	};
}

export function getCourses(d) {
	console.log("CourseActions.getCourses():1");
	return function(dispatch, getState) {
		api.getCourses("").then(courses => {
			console.log("CourseActions.js:getCourses(): " + JSON.stringify(courses));
			dispatch(setCourses(courses, d));
		});
	};
}

export function setSelectedCourseId(id) {

	return function(dispatch, getState) {
		const { courses} = getState().course;
		console.log("FOUND courses: " + JSON.stringify(courses));
		let found = courses.filter(course => course.value === id);
		console.log("FOUND COURSE: " + JSON.stringify(found) + ", " + JSON.stringify(found.get(0)) );
		dispatch(selectedCourse(found.size == 1 ? found.get(0) : null));
	}
}

export function selectedCourse(selectedCourse) {
	return {
		type: 'SELECTED_COURSE',
		selectedCourse: selectedCourse
	};
}