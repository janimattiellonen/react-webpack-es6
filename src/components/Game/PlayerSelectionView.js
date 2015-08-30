import React from "react";
import Immutable from "immutable";
import store from 'store';
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

		console.log("PlayerSelectionView.render() joined: " + this.props.selectedPlayersJoined);

		console.log("PlayerSelectionView.render(), selected players: " + JSON.stringify(this.props.selectedPlayers));

		return (
			<div>
				<h2>Valitse pelaajat</h2>

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
					<Button bsStyle='primary' href="/#/confirm-selections" bsSize='small' disabled={!this.isSubmittable()}>Valmis!</Button>
				</div>
			</div>
		)
	},

	componentDidMount() {
		const {courses, d, selectedPlayers, playerActions} = this.props;

		if (!selectedPlayers || selectedPlayers.size == 0) {
			let sp = store.get('SELECTED_PLAYERS');
			
			if (sp) {
				playerActions.selectedPlayers(Immutable.List(sp));
			}
		}
	}, 

	loadPlayers(input, callback) {

		const {d, selectedPlayers, selectedPlayersJoined} = this.props;

		let options = [];

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

	isSubmittable() {
		console.log(JSON.stringify(this.props));
		return this.props.selectedPlayers && this.props.selectedPlayers.size > 0;
	}    
});