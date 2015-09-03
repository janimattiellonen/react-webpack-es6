import Immutable from "immutable";

import GameManager from '../components/Game/GameManager';

let gameManager = new GameManager();

export function startGame() {
	return function(dispatch, getState) {
		// do we even need to call dispatch?
		dispatch(setCurrentHoleNumber(1));

		let selectedPlayers = getState().players.selectedPlayers;

		selectedPlayers.forEach(function(player, index) {
			player.scores = [];
		});

		dispatch(setPlayers(selectedPlayers));
		
		gameManager.setCourse(getState().course.selectedCourse);
		gameManager.setPlayers(selectedPlayers);
		gameManager.setCurrentHoleNumber(1);
	};
}

export function setPlayers(players) {
	return {
		type: 'SET_PLAYERS',
		players: players
	};
}

export function setCurrentHoleNumber(holeNumber) {
	return function(dispatch, getState) {
		let holes = getState().course.selectedCourse.layout.holes;

		if (holeNumber > holes.length) {
			holeNumber = 1;
		} else if (holeNumber < 1) {
			holeNumber = holes.length;
		}

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

export function foo() {
	console.log("FOOOOOOO");

	return function(dispatch, getState) {

	};
}

export function getScoreFor (player, holeNumber) {
	return function(dispatch, getState) {


		return 5;
	};
}

export function setScoreFor(score, holeNumber, player) {

	gameManager.setScoreFor(score, holeNumber, player);

}