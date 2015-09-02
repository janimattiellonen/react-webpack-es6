import React from "react";
import Immutable from "immutable";

export default React.createClass({

	getInitialState() {
		return {
			'score': this.props.hole.par
		}
	},

	render() {

		return (
			<div>
				{this.props.player.label}: 

				<input className="score-input" type="submit" value="-" onClick={this.decreaseScore} />
				<input className="score-input" type="text" name="score" value={this.state.score} onChange={this.changeScore} />
				<input className="score-input" type="submit" value="+" onClick={this.increaseScore} />
			</div>
		);
	},

    changeScore(evt) {
        this.setState({
            'score': evt.target.value
        });
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

		//gameActions.setScoreFor(player, hole, score);
	},	
});