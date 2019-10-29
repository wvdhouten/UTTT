'use strict';

var connection = new signalR.HubConnectionBuilder().withUrl('/utttHub').build();
var player = { 'id': '', 'name': '' };

$(document).ready(function() {
    $('#games').on('click', '.join-game-button', function() { joinGame(this); });
    $('#board').on('click', '.field', function() { claimField($(this)); });

    connection.start().then(function() {
        tryRestorePlayerData();
    });
});

// Player Identification

function tryRestorePlayerData() {
    const name = localStorage.getItem('name');
    if (name) {
        identify(name);
    }
}

function rename() {
    const name = $('#name-field').val();
    identify(name);
}

function identify(name) {
    const playerId = localStorage.getItem('playerId');
    connection.invoke('Identify', name, playerId)
        .then(function(playerId) {
            setPlayerData(name, playerId);

            $('#login-container').addClass('hidden');
            $('#lobby-container').removeClass('hidden');
            $('#name').text(name);

            getGames();
        }).catch(function(err) {
            console.error(err.toString());
        });
}

function getGames() {
    connection.invoke('GetGames').then(function(games) {
        updateGames(games);
    }).catch(function(err) {
        console.error(err.toString());
    });
}

function setPlayerData(name, playerId) {
    player.name = name;
    player.id = playerId;
    localStorage.setItem('name', name);
    localStorage.setItem('playerId', playerId);
}

// Game Registration

function newGame() {
    connection.invoke('NewGame', player.id).then(function() {
        $('#lobby-container').addClass('hidden');
        $('#game').removeClass('hidden');
    }).catch(function(err) {
        console.error(err.toString());
    });
}

function joinGame(button) {
    const gameId = $(button).attr('game-id');
    if (!gameId) {
        return;
    }

    connection.invoke('JoinGame', gameId, player.id).then(function() {
        $('#lobby-container').addClass('hidden');
        $('#game').removeClass('hidden');
    }).catch(function(err) {
        console.error(err.toString());
    });
}

// Game Interaction

function claimField(field) {
    const fieldIndex = field.index();

    const area = field.parent();
    const areaIndex = area.index();

    connection.invoke('ClaimField', areaIndex, fieldIndex).catch(function(err) {
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
    }
}

function updateActivity(state) {
    const board = $('#board');

    board.removeClass('active');
    board.children().removeClass('active');
    if (state.activePlayer === player.id && state.winner === 0) {
        if (state.activeArea >= 0)
            board.children().eq(state.activeArea).addClass('active');
        else
            board.addClass('active');
        showMessage("It's your turn!");
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

// Listeners

connection.on('GamesUpdate',
    function(games) {
        updateGames(games);
    });

connection.on('GameUpdate',
    function(state) {
        updateState(state);
    });

connection.on('Error',
    function(message) {
        showError(message);
    });