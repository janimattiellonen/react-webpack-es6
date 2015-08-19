import React from "react";
import Immutable from "immutable";

export default React.createClass({

	getInitialState() {
		return {
			'score': 3
		}
	},

	render() {
		let player = this.props.player;

		return (
			<div className="score-selector">
				<input type="submit" value="-" onClick={this.decreaseScore} />
				<input type="text" name="score" value={this.state.score}/>
				<input type="submit" value="+" onClick={this.increaseScore} />
			</div>
		);
	},

	increaseScore() {
		this.setState({
			'score': this.state.score + 1
		});
	},

	decreaseScore() {
		this.setState({
			'score': this.state.score - 1
		});
	}
});