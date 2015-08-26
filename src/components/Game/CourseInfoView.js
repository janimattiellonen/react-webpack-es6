import React from "react";
import Immutable from "immutable";
import Api from "../../api";

export default React.createClass({

	shouldComponentUpdatse: function(nextProps, nextState) {
		return true;
	},

	render() {

		if(!this.props.course.label) {
			return (
				<div>Rataa ei ole valittu</div>
			);
		} else {
			return (
				<div>
					{this.props.course.label}: {this.props.course.holes} holes, {this.props.course.length}m, par {this.props.course.par}
				</div>
			);
		}

	}
});