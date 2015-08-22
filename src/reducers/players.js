import { handleActions } from 'redux-actions';
import { List } from 'immutable';

export default handleActions({

	FOO: (state, action) => {
		console.log("FOO called...");
		
		return state;
	},

    RECEIVE_PLAYERS: (state, action) => {
        return action.players
    },

}, List());
