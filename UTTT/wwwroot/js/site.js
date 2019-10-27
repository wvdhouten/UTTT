function showMessage(message) {
    var x = $('#snackbar');
    $('#snackbar-content').text(message);
    x.addClass('show');
    x.addClass('info');
    setTimeout(function () {
        x.removeClass('show');
        x.removeClass('info');
    }, 3000);
}

function showError(message) {
    var x = $('#snackbar');
    $('#snackbar-content').text(message);
    x.addClass('show');
    x.addClass('error');
    setTimeout(function () {
        x.removeClass('show');
        x.removeClass('error');
    }, 3000);
}