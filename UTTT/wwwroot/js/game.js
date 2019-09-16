﻿'use strict';

var connection = new signalR.HubConnectionBuilder().withUrl('/gameHub').build();
var connectionId;

$(document).ready(function() {
    $('#create-game-button').on('click', () => JoinGame(true));
    $('#join-game-button').on('click', () => JoinGame(false));
    $('#board').on('click', '.field', function () { claimField($(this)); });
});

function JoinGame(newGame) {
	var gameId = '';
    if (!newGame) {
        gameId = $("input[name='game']:checked").val();
        if (!gameId) {
		    return;
        }
    }

    var name = $("#name").val();
    if (!name) {
	    return;
    }

    connection.invoke('Join', gameId, name).catch(function(err) {
        return console.error(err.toString());
    });

    $('#game-selector').addClass('hidden');
    $('#board').removeClass('hidden');
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
    if (state.activePlayer === connectionId && state.status === 1) {
        if (state.activeArea >= 0)
            board.children().eq(state.activeArea).addClass('active');
        else
            board.addClass('active');
    }

    if (state.status > 1) {
        board.attr('owner', state.status - 1);
    }
    
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
	var gamesElement = $('#games');
    gamesElement.empty();

    for (let game in games) {
        if (!games.hasOwnProperty(game)) {
			return;
		}

        $(`<label><input type="radio" name="game" value="${game}">${games[game]}</label>`).appendTo(gamesElement);
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

connection.start().then(function () {
    connection.invoke('GetConnectionId')
        .then(function (id) {
            connectionId = id;
            console.log(`connected: ${id}`);
        });
    connection.invoke('GetGames')
	    .then(function (games) {
		    updateGames(games);
	    });
}).catch(function(err) {
    return console.error(err.toString());
});