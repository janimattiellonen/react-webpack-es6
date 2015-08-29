import React from "react";
import Immutable from "immutable";
import Api from "../../api";
import { Button } from 'react-bootstrap';
import Select from "react-select";

export default React.createClass({

	render() {
		console.log("PlayerSelectionView.render()");
		let self = this;

		let getOptions = function(input, callback) {	
			console.log("INPUT2: " + input);
		    setTimeout(() => {
		    	self.loadPlayers(input, callback);
		    }, 500);
		};		


		let options = [
			{value: "2525", label: 'Janimatti Ellonen', uuid: "rdsgdfgdf"},
			{value: "78", label: 'Mikko Juola', uuid: "dzfjhdfkjghdkjdfh"}
		];	

		console.log("PlayerSelectionView.render() joined: " + this.props.selectedPlayersJoined);

		console.log("PlayerSelectionView.render(), selected players: " + JSON.stringify(this.props.selectedPlayers));

		console.log("PlayerSelectionView.render(), options: " + JSON.stringify(options));


		return (
			<div>
				<h2>Valitse pelaajat</h2>

				<Select
					name="test"
					options={options}
					multi={true}
					value="2525,78"
				/>	

				<Select
					name="players"
					multi={true}
					value={this.props.selectedPlayersJoined}
					searchable={true}
					autoload={false}
					options={this.props.selectedPlayers.toArray()}
					cacheAsyncResults={false}
					asyncOptions={getOptions}
					onChange={this.changeValue}
				>
				</Select>

				<div>
					<Button bsStyle='primary' href="/#/new-game" bsSize='small'>Edellinen - valitse rata</Button>
					<Button bsStyle='primary' href="/#/select-players" bsSize='small'>Valmis!</Button>
				</div>
			</div>
		)
	},

	loadPlayers(input, callback) {

		const {d, selectedPlayers, selectedPlayersJoined} = this.props;

		let options = [];

		console.log("ooo: " + JSON.stringify(selectedPlayers));

		callback(null, {
			options: []
		});

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