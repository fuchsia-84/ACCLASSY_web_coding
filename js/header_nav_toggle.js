$(function() {
    var $header = $('#header');
    var change_header_position = $("#top").height() - $("#header").outerHeight(true);
    // Nav Toggle Button
    $('#toggle_btn').click(function(){
        $header.toggleClass('open');
        // Global Nav
        if ( $('#header').hasClass('open') ) {
            $('#global_nav').slideDown();
            $('#global_nav').css('display','block');
        } else {
            $('#global_nav').slideUp(function() {
                $('#global_nav').css('display','none');
            });
        }
    });
    // Global Nav Links
    $('#global_nav li a').on('click', function(event){
        $('#toggle_btn').trigger('click');
    });
});