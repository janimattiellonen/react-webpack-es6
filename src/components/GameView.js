import React from "react";
import Immutable from "immutable";
import Api from "../api";
import CourseInfoView from "./Game/CourseInfoView";
import PlayerList from "./Game/PlayerList";

export default React.createClass({

	getInitialState() {
		return {
			'players': Immutable.List()
		}
	},

	render() {
		return (
			<div>
				<CourseInfoView />

				<div><PlayerList players={this.state.players}/></div>
			</div>
			
		);
	},

	componentDidMount() {
		this.loadPlayers()
    },

	loadPlayers() {
		Api.getPlayers().then(players => {
			this.setState({
				'players': players
			});
		});
	}    
});