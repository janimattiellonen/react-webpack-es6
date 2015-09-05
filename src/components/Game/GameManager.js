import Immutable from "immutable";

export default class GameManager {

	loadGame() {

	}

	setCourse(course) {
		this.course = course;
	}

	setPlayers(players) {

		let playerMap = Immutable.Map();

		let hash = {};

		players.forEach(function(player) {
			playerMap = playerMap.set(parseInt(player.value), player);
		});

		this.players = playerMap;
	}

	setCurrentHoleNumber(holeNumber) {
		this.currentHoleNumber = holeNumber;
	}

	setScoreFor(score, holeNumber, playerId) {

		let player = this.players.get(parseInt(playerId));

		player.scores = player.scores.set(parseInt(holeNumber), score);

		this.players = this.players.set(playerId, player);
	}

	getScoreFor(playerId, holeNumber) {
		let score = this.players.get(parseInt(playerId)).scores.get(parseInt(holeNumber));
		
		return score ? score : 0;
	}
}