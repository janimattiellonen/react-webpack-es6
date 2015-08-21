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
		let course = {
			name: 'Tali',
			holes: 18,
			par: 58,
			length: 1865
		};

		return (
			<div>
				<CourseInfoView course={course}/>

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