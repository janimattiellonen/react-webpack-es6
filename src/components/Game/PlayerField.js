import React from "react";
import Immutable from "immutable";

export default React.createClass({

	getInitialState() {
		return {
			'score': 3
		}
	},

	render() {

		return (
			<div>
				{this.props.player.label}: 

				<input className="score-input" type="submit" value="-" />
				<input className="score-input" type="text" name="score" value={this.state.score} />
				<input className="score-input"  type="submit" value="+"  />
			</div>
		);
	},

	increaseScore() {
		this.setState({
			'score': this.state.score + 1
		});

		this.setScore(this.state.score + 1, this.props.hole.number);
	},

	decreaseScore() {
		this.setState({
			'score': this.state.score - 1
		});

		this.setScore(this.state.score - 1, this.props.hole.number);
	},

	setScore(score, hole) {
		const { player, gameActions} = this.props;

		gameActions.setScoreFor(player.value, hole, score);
	},	
});