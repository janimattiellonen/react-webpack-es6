import { handleActions } from 'redux-actions';
import { List } from 'immutable';
import moment from 'moment';

export default handleActions({

	SET_PLAYERS: (state, action) => {
		
		return {
			...state,
			players: action.players,
			d: state.d
		};
	},

}, { players: List(), d: moment()});
