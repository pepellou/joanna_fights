var hideResignbutton = function() {
    $('button.resign').hide();
};

$(function() {
    hideResignbutton();

    $("#lichess .lichess_ground").on('DOMSubtreeModified', ".control.icons", function() {
        hideResignbutton();
    });
});
