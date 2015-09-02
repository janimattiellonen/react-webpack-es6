export function startGame() {
	return function(dispatch, getState) {
		let holeNumber = 1;

		let holes = getState().course.selectedCourse.layout.holes;

		let hole = holes[holeNumber - 1];
		console.log("GameActions:startGame(): " + JSON.stringify(hole));
		dispatch(currentHole(hole));
	};
}

export function currentHole(currentHole) {
	return {
		type: 'CURRENT_HOLE',
		currentHole: currentHole
	};
}