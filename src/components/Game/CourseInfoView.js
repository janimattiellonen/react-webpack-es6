import React from "react";
import Immutable from "immutable";
import Api from "../../api";

export default React.createClass({

	getInitialState() {
		return {
			'players': Immutable.List()
		}
	},


	render() {
		return (
			<div>Tali</div>
		);
	}
});