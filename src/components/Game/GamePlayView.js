import React from "react";
import Immutable from "immutable";
import { Button, Glyphicon } from 'react-bootstrap';

export default React.createClass({

	render() {

		return (
			<div>
				<h3>Peli</h3>		


				<Button><Glyphicon glyph='arrow-left' />Edellinen väylä</Button>	
				<Button><Glyphicon glyph='arrow-right' className="pull-right"/>Seuraava väylä</Button>	
			</div>
		);
	},
});