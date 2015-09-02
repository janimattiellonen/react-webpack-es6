export function startGame() {
	return function(dispatch, getState) {
		dispatch(setCurrentHoleNumber(1));
	};
}

export function setCurrentHoleNumber(holeNumber) {
	return function(dispatch, getState) {
		let holes = getState().course.selectedCourse.layout.holes;
		console.log("holeNumber: " + holeNumber + ", size: " + holes.length);

		if (holeNumber > holes.length) {
			holeNumber = 1;
		} else if (holeNumber < 1) {
			holeNumber = holes.length;
		}
		console.log("holeNumber now: " + holeNumber);
		let hole = holes[holeNumber - 1];

		dispatch(currentHole(hole));
	};
}

export function nextHole() {
	return function(dispatch, getState) {
		dispatch(setCurrentHoleNumber(getState().game.currentHole.number + 1));
	};
}

export function previousHole() {
	return function(dispatch, getState) {
		dispatch(setCurrentHoleNumber(getState().game.currentHole.number - 1));
	};
}

export function currentHole(currentHole) {
	return {
		type: 'CURRENT_HOLE',
		currentHole: currentHole
	};
}