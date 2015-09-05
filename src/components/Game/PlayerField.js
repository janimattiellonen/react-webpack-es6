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

	componentDidMount() {
		const { player, gameActions} = this.props;

		this.setState({
			score: gameActions.getScoreFor(player, this.props.hole.number)
		});
	},

	componentWillReceiveProps(nextProps) {
		const { player, gameActions} = nextProps;

		this.setState({
			score: gameActions.getScoreFor(player, nextProps.hole.number),
		});
	},

    changeScore(evt) {
        this.setScore(parseInt(evt.target.value), this.props.hole.number);
    },

	increaseScore() {
		this.setScore(this.state.score + 1, this.props.hole.number);
	},

	decreaseScore() {
		this.setScore(this.state.score - 1, this.props.hole.number);
	},

	setScore(score, holeNumber) {
		const { player, gameActions} = this.props;

		this.setState({
            'score': score
        });

		gameActions.setScoreFor(score, holeNumber, player);
	},	
});