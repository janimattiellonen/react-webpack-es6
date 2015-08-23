import React from "react";
import Immutable from "immutable";
import Api from "../../api";

export default React.createClass({

	getInitialState() {
		return {
			'name': '',
			'par': 0,
			'length': 0
		}
	},


	render() {
		return (
			<div>{this.props.course.value}: {this.props.course.label} holes, {this.props.course.value}m, par {this.props.course.label}</div>
		);
	}
});