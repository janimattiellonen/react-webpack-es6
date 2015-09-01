import React from "react";
import Immutable from "immutable";
import { Button, Glyphicon } from 'react-bootstrap';
import GameBoard from './GameBoard';

export default React.createClass({

	render() {

		return (
			<div>
				<h3>Peli</h3>		

				<div className="game-board">
					<GameBoard players={this.props.selectedPlayers}/>
				</div>

				<div className="button-panel">
					<Button><Glyphicon glyph='arrow-left' />Edellinen väylä</Button>	
					<Button><Glyphicon glyph='arrow-right' className="pull-right"/>Seuraava väylä</Button>	
				</div>
			</div>
		);
	},

	componentDidMount() {

	}
});