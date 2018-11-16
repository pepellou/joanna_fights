var hideResignbutton = function() {
    $('button.resign-confirm').hide();
};

$(function() {
    hideResignbutton();

    $("#lichess .lichess_ground").on('DOMSubtreeModified', ".control.icons", function() {
        hideResignbutton();
    });
});
