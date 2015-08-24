import React from "react";
import Immutable from "immutable";
import Api from "../../api";

export default React.createClass({

	getDefaultProps() {
		return {
			selectedCourse: {
				value: 1,
				label: "",
				par: 0
			}
		}
	},



	shouldComponentUpdatse: function(nextProps, nextState) {
		console.log("luss");
		return true;
	},

	render() {
		console.log("rendering this..." + JSON.stringify(this.props.course));
		return (
			<div>{this.props.course.value}: {this.props.course.label} holes, {this.props.course.value}m, par {this.props.course.label}</div>
		);
	}
});