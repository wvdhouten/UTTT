﻿'use strict';

var connection = new signalR.HubConnectionBuilder().withUrl('/utttHub').build();
var connectionId;

$(document).ready(function() {
    $('#new-game-button').on('click', () => createGame());
    $('#games').on('click', '.join-game-button', function () { joinGame(this); });
    $('#board').on('click', '.field', function () { claimField($(this))});
});

function createGame() {
    const name = getPlayerName();

    connection.invoke('Create', name).then(function() {
        $('#game-selector').addClass('hidden');
        $('#game').removeClass('hidden');
    }).catch(function(err) {
        return console.error(err.toString());
    });
}

function joinGame(button) {
    const gameId = $(button).attr('game-id');
    if (!gameId) {
        return;
    }

    const name = getPlayerName();

    connection.invoke('Join', gameId, name).then(function() {
        $('#game-selector').addClass('hidden');
        $('#game').removeClass('hidden');
    }).catch(function(err) {
        return console.error(err.toString());
    });
}

function getPlayerName() {
    return prompt('Name');
}

function claimField(field) {
    const fieldIndex = field.index();

    const area = field.parent();
    const areaIndex = area.index();

    connection.invoke('ClaimField', areaIndex, fieldIndex).catch(function(err) {
        return console.error(err.toString());
    });
}

function updateState(state) {
    const board = $('#board');

    board.removeClass('active');
    board.children().removeClass('active');
    if (state.activePlayer === connectionId && state.winner === 0) {
        if (state.activeArea >= 0)
            board.children().eq(state.activeArea).addClass('active');
        else
            board.addClass('active');
    }

    const player1 = state.player1.name ? state.player1.name : '';
    const player2 = state.player2.name ? state.player2.name : '';

    $('#players').text(`${player1} - ${player2}`);

    board.attr('owner', state.winner);

    for (let areaIndex in state.areas) {
        if (!state.areas.hasOwnProperty(areaIndex)) {
            return;
        }

        const area = board.children().eq(areaIndex);
        const areaState = state.areas[areaIndex];
        area.attr('owner', areaState['owner']);

        const fields = areaState['fields'];
        for (let index in fields) {
            if (!fields.hasOwnProperty(index)) {
                return;
            }

            const field = area.children().eq(index);
            field.attr('owner', fields[index]['owner']);
        }
    };
}

function updateGames(games) {
    const gamesElement = $('#games');
    gamesElement.empty();

    for (let game in games) {
        if (!games.hasOwnProperty(game)) {
            return;
        }

        $(`<button class="join-game-button" game-id="${game}">${games[game]}</button>`).appendTo(gamesElement);
    }
}

connection.on('UpdateGames',
    function(games) {
        updateGames(games);
    });

connection.on('Update',
    function(state) {
        updateState(state);
    });

connection.start().then(function() {
    connection.invoke('GetConnectionId')
        .then(function(id) {
            connectionId = id;
            console.log(`connected: ${id}`);
        });
    connection.invoke('GetGames')
        .then(function(games) {
            updateGames(games);
        });
}).catch(function(err) {
    return console.error(err.toString());
});