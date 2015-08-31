import React from "react";
import Immutable from "immutable";
import PlayerField from "./PlayerField";

export default React.createClass({

	render() {

		const { players} = this.props;

		return (
			<div>
				{players.map(player => {
					return(
						<div>
							<PlayerField player={player} />
						</div>
					)
				})}
			</div>
		);
	},
});