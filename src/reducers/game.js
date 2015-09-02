import { handleActions } from 'redux-actions';

export default handleActions({

	CURRENT_HOLE: (state, action) => {
		return {
			...state,
			currentHole: action.currentHole
		};
	}

}, {currentHole: {}});