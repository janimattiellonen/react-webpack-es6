import api from '../api'
import _ from 'lodash';

export function setPlayers(players, d) {
    return {
        type: 'SET_PLAYERS',
        players: players,
        d: d
    };
}

export function setSelectedPlayerIds(selectedPlayerIds) {
    console.log("uuuu");
    return function(dispatch, getState) {
        const { players} = getState().players;

        let found = players.filter(function(player) {
            return _.includes(selectedPlayerIds, player.value);
        });

        dispatch(selectedPlayers(found));
    }
}

export function selectedPlayers(selectedPlayers) {
    return {
        type: 'SELECTED_PLAYERS',
        selectedPlayers: selectedPlayers
    };
}