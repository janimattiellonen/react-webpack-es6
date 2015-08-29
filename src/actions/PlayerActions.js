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
    return function(dispatch, getState) {
        const { players} = getState().players;

        let found = players.filter(function(player) {
            return _.includes(selectedPlayerIds, player.value);
        });

        dispatch(selectedPlayers(found));
    }
}

export function selectedPlayers(selectedPlayers) {

    let ids = [];

    selectedPlayers.map(function(player)
    {
        ids.push(player.value);
    });

    console.log("PlayerActions.selectedPlayers(): selected players: " + JSON.stringify(selectedPlayers));
    console.log("PlayerActions.selectedPlayers(): selected player ids: " + JSON.stringify(ids));

    return {
        type: 'SELECTED_PLAYERS',
        selectedPlayers: selectedPlayers,
        selectedPlayersJoined: ids.join(',')
    };
}