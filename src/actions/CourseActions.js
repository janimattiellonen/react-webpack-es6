export function setCourses(courses) {
	return {
		type: 'SET_COURSES',
		courses: courses
	};
}

export function getCourses() {
	return {
		type: 'GET_COURSES',
	};
}

export function fetchCourseInformation(id) {
	return function(dispatch, getState) {

	}
}

export function selectedCourse(id) {
	return {
		type: 'SELECTED_COURSE',
		id: id
	};
}
