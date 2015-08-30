import React from "react";
import Immutable from "immutable";
import { Button } from 'react-bootstrap';

import CourseInfoView from "./CourseInfoView";
import PlayerList from "./PlayerList";


import Api from "../../api";

export default React.createClass({

	render() {
		const {selectedCourse, selectedPlayers} = this.props;

		return (
			<div>
				<h2>Vahvista valinnat</h2>


				<h3>Valittu rata</h3>
				<CourseInfoView course={ selectedCourse }/>

				<Button bsStyle='primary' href="/#/new-game" bsSize='small'>Muokkaa ratavalintaa</Button>
				
				<h3>Valitut pelaajat</h3>

				<PlayerList players={selectedPlayers} />

				<Button bsStyle='primary' href="/#/select-players" bsSize='small'>Muokka pelaajavalintoja</Button>

				<br/><br/>
				<Button bsStyle='primary' href="/#/game" bsSize='small'>Aloita peli!</Button>

			</div>
		);
	}
});