import React from "react";
import Immutable from "immutable";
import Api from "../api";
import CourseInfoView from "./Game/CourseInfoView";
import PlayerList from "./Game/PlayerList";
import Select from "react-select";

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

		let self = this;


		let getOptions = function(input, callback) {	
		    setTimeout(() => {
		    	//dispatch(PlayerActions.foo());
		    	self.props.playerActions.foo();
		    	self.loadCourses(input, callback);
		    }, 500);
		};		

		return (
			<div>
				<CourseInfoView course={course}/>

				<Select
					name="course"
					multi={false}
					searchable={true}
					autoload={false}
					asyncOptions={getOptions}
					onChange={this.logChange}
				/>

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
	},

	loadCourses(input, callback) {
		Api.getCourses().then(courses => {
    		let selections = {options: courses.toArray(), complete: false};

			callback(null, selections);
		});
	},

	logChange(val) {
	    console.log("Selected: " + val);
	}    
});