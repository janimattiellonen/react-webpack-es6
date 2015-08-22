import api from '../api'

function receivePlayers(players) {
    return {
        type: 'RECEIVE_PLAYERS',
        players: players
    };
}

export function foo() {
	return {
		type: 'FOO'
	};
}

export function fetchplayers(d) {
    return function(dispatch) {
        api.getPlayers().then(players => {
           // dispatch(receivePlayers(players));
        });
    };
};
