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

		const {courses, d, selectedCourse} = this.props;

		let self = this;


		let getOptions = function(input, callback) {	
			console.log("INPUT: " + input);
		    setTimeout(() => {
		    	//self.props.courseActions.getCourses();
		    	self.loadCourses(input, callback);
		    }, 500);
		};		

		console.log("wut2: " + JSON.stringify(selectedCourse));

		return (
			<div>		
				<CourseInfoView course={ selectedCourse }/>
				
				<Select
					name="course"
					multi={false}
					searchable={true}
					autoload={false}
					cacheAsyncResults={false}
					asyncOptions={getOptions}
					onChange={this.logChange}
				/>
				
				<div><PlayerList players={this.state.players}/></div>

				<div>
					<ul>
						{courses.map(course => {
							return (<li key={course.value}>:{course.label}</li>);
						})}
					</ul>
				</div>
			</div>
			
		);
	},

	shouldComponentUpdate: function(nextProps, nextState) {
		console.log("should update: " + (nextProps.d === this.props.d));
		console.log("this.props.d: " + this.props.d + ", nextProps.d: " + nextProps.d);

  		return nextProps.d !== this.props.d;
	},

	loadPlayers() {
		Api.getPlayers().then(players => {
			this.setState({
				'players': players
			});s
		});
	},

	loadCourses(input, callback) {

		const {d} = this.props;

		Api.getCourses(input).then(courses => {
			
    		let selections = {options: courses.toArray()};
			callback(null, selections);
			this.props.courseActions.setCourses(courses, d);
		});
	},

	logChange(val) {

		const { courseActions } = this.props;

	    console.log("Selected: " + val);
	    courseActions.setSelectedCourseId(val);
	}    
});