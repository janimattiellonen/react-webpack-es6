import React from "react";
import Immutable from "immutable";
import Api from "../../api";
import ScoreSelector from "./ScoreSelector";

export default React.createClass({

	getInitialState() {
		return {
			
		}
	},

	render() {
		let player = this.props.player;

		return (
			<div className="player-row">
				<div className="player-avatar col">LUSS</div>
				<div className="player-name col">{player.name}</div>
				<div className="player-par col"><ScoreSelector /></div>
				<div className="player-total-score col">-15</div>
			</div>
		);
	}
});