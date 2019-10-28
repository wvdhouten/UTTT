'use strict';

var connection = new signalR.HubConnectionBuilder().withUrl('/utttHub').withAutomaticReconnect().build();
var connectionId;

$(document).ready(function() {
    $('#games').on('click', '.join-game-button', function () { joinGame(this); });
    $('#board').on('click', '.field', function () { claimField($(this)) });

    restorePlayerData();
});

function setPlayerData(name, playerId) {
    localStorage.setItem('name', name);
    localStorage.setItem('playerId', playerId);
}

function restorePlayerData() {
    const name = localStorage.getItem('name');
    const playerId = localStorage.getItem('playerId');

    if (name) {
        alert(name);
    }
}

function newGame() {
    const name = promptName();
    if (!name) {
        return;
    }

    setPlayerData(name, 1);

    connection.invoke('NewGame', name).then(function() {
        $('#game-selector').addClass('hidden');
        $('#game').removeClass('hidden');
    }).catch(function (err) {
        console.error(err.toString());
    });
}

function joinGame(button) {
    const gameId = $(button).attr('game-id');
    if (!gameId) {
        return;
    }

    const name = promptName();
    if (!name) {
        return;
    }

    connection.invoke('JoinGame', gameId, name).then(function() {
        $('#game-selector').addClass('hidden');
        $('#game').removeClass('hidden');
    }).catch(function (err) {
        console.error(err.toString());
    });
}

function promptName() {
    return prompt('Name');
}

function claimField(field) {
    const fieldIndex = field.index();

    const area = field.parent();
    const areaIndex = area.index();

    connection.invoke('ClaimField', areaIndex, fieldIndex).catch(function (err, re) {
        console.error(err.toString());
    });
}

function updateState(state) {
    updatePlayers(state);
    updateBoard(state);
    updateActivity(state);
}

function updatePlayers(state) {
    const player1 = state.player1.name ? state.player1.name : '';
    const player2 = state.player2.name ? state.player2.name : '';

    $('#players').text(`${player1} - ${player2}`);
}

function updateBoard(state) {
    const board = $('#board');
    board.attr('owner', state.winner);

    for (let areaIndex in state.board) {
        if (!state.board.hasOwnProperty(areaIndex)) {
            return;
        }

        const area = board.children().eq(areaIndex);
        const areaState = state.board[areaIndex];
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

function updateActivity(state) {
    const board = $('#board');

    board.removeClass('active');
    board.children().removeClass('active');
    if (state.activePlayer === connectionId && state.winner === 0) {
        if (state.activeArea >= 0)
            board.children().eq(state.activeArea).addClass('active');
        else
            board.addClass('active');
        showMessage('It\'s your turn!');
    } else if (state.winner === 1) {
        showMessage(`${state.player1.name} Wins!`);
    } else if (state.winner === 2) {
        showMessage(`${state.player2.name} Wins!`);
    }
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

connection.on('Error',
    function (message) {
        showError(message);
    });

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
    console.error(err.toString());
});