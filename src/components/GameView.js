import React from "react";
import Immutable from "immutable";
import Api from "../api";
import CourseInfoView from "./Game/CourseInfoView";
import PlayerList from "./Game/PlayerList";
import Select from "react-select";

export default React.createClass({
	getInitialState() {
		return {
			'players': Immutable.List(),
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
			console.log("INPUT: " + input);
		    setTimeout(() => {
		    	self.loadCourses(input, callback);
		    }, 500);
		};		

		console.log("wut: " + JSON.stringify(this.props.courses));


		let arr = [
			10,12,13,14
		];

		arr.map(val => {
			console.log("arr: " + val);
		});

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

				<div>
					<ul>
						{this.props.courses.map(course => {
							console.log("xoxox: " + course.label);
							return (<li>:{course.label}</li>);
						})}
					</ul>
				</div>
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
    		console.log("ttt: " + JSON.stringify(courses));
			callback(null, selections);
			this.props.courseActions.setCourses(courses);
		});
	},

	logChange(val) {
	    console.log("Selected: " + val);

	    //console.log("COURSE INFO: " + JSON.stringify(this.props.courseActions.selectedCourse(val)));
	}    
});