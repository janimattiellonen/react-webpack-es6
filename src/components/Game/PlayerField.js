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

		console.log("next props: " + JSON.stringify(nextProps));

		console.log("componentWillReceiveProps(): hole number: " + nextProps.hole.number + ", score: " + gameActions.getScoreFor(player, nextProps.hole.number));

		this.setState({
			score: gameActions.getScoreFor(player, nextProps.hole.number),
		});
	},

    changeScore(evt) {
        this.setState({
            'score': parseInt(evt.target.value)
        });

        this.setScore(parseInt(evt.target.value), this.props.hole.number);
    },

	increaseScore() {
		this.setState({
			'score': this.state.score + 1
		});

		console.log("increaseScore(), score: " + (this.state.score + 1) + ", hole: " + this.props.hole.number);

		this.setScore(this.state.score + 1, this.props.hole.number);
	},

	decreaseScore() {
		this.setState({
			'score': this.state.score - 1
		});

		this.setScore(this.state.score - 1, this.props.hole.number);
	},

	setScore(score, holeNumber) {
		const { player, gameActions} = this.props;

		gameActions.setScoreFor(score, holeNumber, player);
	},	
});