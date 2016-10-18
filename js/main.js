$(document).ready(function() {

    /**
     * fix navbar after scrolling down
     */
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1100) {
            $('#navbar').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 1100) {
            $('#navbar').removeClass('navbar-fixed');
        }
    });


    /**
     * animate percent scale
     */
    function loadPercentScale() {
        $('.scale-active').each(function () {
            var el = $(this);
            var elWidth = el.width();
            el.width(0);
            el.animate({width: elWidth}, 4000);
        });
    }

    /**
     * animate after scrolling down
     */
    $(document).bind('scroll', function() {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $('#skills').offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadPercentScale();

            $(document).unbind('scroll');
        }
    });


    /**
     * animate page navigation
     */
    $('.nav-link').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1500);
        }
        return false;
    });


});
