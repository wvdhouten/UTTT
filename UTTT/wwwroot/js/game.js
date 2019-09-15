'use strict';

var connection = new signalR.HubConnectionBuilder().withUrl('/gameHub').build();
var connectionId;

$(document).ready(function() {
    $('#join-button').on('click', () => joinGame());

    $('#board').on('click',
        '.field',
        function() {
            makeMove($(this));
        });
});

function joinGame() {
    const gameId = $('#game-id').val();

    connection.invoke('Join', gameId).catch(function(err) {
        return console.error(err.toString());
    });
}

function makeMove(field) {
    const gameId = $('#game-id').val();
    const area = field.parent();

    const fieldIndex = field.index();
    const areaIndex = area.index();

    connection.invoke('ClaimField', gameId, areaIndex, fieldIndex).catch(function(err) {
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

connection.on('Joined',
    function(state) {
        updateState(state);
    });

connection.on('Update',
    function(state) {
        updateState(state);
    });

connection.start().then(function () {
    connection.invoke('getConnectionId')
        .then(function (id) {
            connectionId = id;
            console.log(`connected: ${id}`);
        });
}).catch(function(err) {
    return console.error(err.toString());
});