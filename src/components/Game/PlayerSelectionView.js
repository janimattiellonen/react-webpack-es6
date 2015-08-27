import React from "react";
import Immutable from "immutable";
import Api from "../../api";
import { Button } from 'react-bootstrap';
import Select from "react-select";

export default React.createClass({

	render() {

		let self = this;

		let getOptions = function(input, callback) {	
			console.log("INPUT: " + input);
		    setTimeout(() => {
		    	self.loadPlayers(input, callback);
		    }, 500);
		};		

		return (
			<div>
				<h2>Valitse pelaajat</h2>

				<Select
					name="players"
					multi={true}
					searchable={true}
					autoload={false}
					cacheAsyncResults={false}
					asyncOptions={getOptions}
					onChange={this.changeValue}
				></Select>

				<div>
					<Button bsStyle='primary' href="/#/new-game" bsSize='small'>Edellinen - valitse rata</Button>
					<Button bsStyle='primary' href="/#/select-players" bsSize='small'>Valmis!</Button>
				</div>
			</div>
		)
	},

	loadPlayers(input, callback) {

		const {d} = this.props;

		Api.getPlayers(input).then(players => {
			
    		let selections = {options: players.toArray()};
			callback(null, selections);
			this.props.playerActions.setPlayers(players, d);
		});
	},

	changeValue(newValue) {
		const { playerActions } = this.props;
		console.log("new player id: " + newValue);
		let selectedPlayerIds = newValue.split(",");
		console.log("selected player ids: " + selectedPlayerIds + ", size: " + selectedPlayerIds.length);
	    playerActions.setSelectedPlayerIds(selectedPlayerIds);
	},
});