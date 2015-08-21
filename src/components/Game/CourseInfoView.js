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
			<div>{this.props.course.name}: {this.props.course.holes} holes, {this.props.course.length}m, par {this.props.course.par}</div>
		);
	}
});