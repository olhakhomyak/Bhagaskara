$(document).ready(function() {

    /**
     * fix navbar after scrolling down
     */
    var $pageNav = $("#navbar");
    var navigationOffset = $pageNav.offset();

    $(window).scroll(function() {
        if ($(window).scrollTop() > navigationOffset.top) {
            $pageNav.addClass("navbar-fixed");
        } else{
            $pageNav.removeClass("navbar-fixed");
        }
    });


    /**
     * animate percent scale
     */
    function loadPercentScale() {

        $(".mmm").each(function() {
            $this = $(this);
            var $progressBarTitle = $this.prev();
            var $bar = $this.find("div");
            var percent = $bar[0].style.width;

            $progressBarTitle.text("0%");
            $bar.attr("style", "width: 0%");

            $this.on("inview", function() {
                $bar.animate({
                    width: percent
                }, {
                    duration: 4500,
                    step: function(now) {
                        $progressBarTitle.text(Math.round(now) + "%");
                    }
                });
            });
        });

    }


    /**
     * animate after scrolling down
    //  */
    $(document).bind('scroll', function() {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $('#skills').offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadPercentScale();

            $(document).unbind('scroll');
        }
    });


    $(".zz").each(function() {
        $this = $(this);
        var $number = $this.find(".statistic-counter");
        var value = $number.text();
        $number.text("0");
        $this.one("inview", function() {
            $({
                count: 0
            }).animate({
                count: value
            }, {
                duration: 4500,
                step: function(now) {
                    if (value.slice(-1) == "%") {
                        $number.text(Math.round(now) + "%");
                    } else {
                        $number.text(Math.round(now));
                    }
                }
            });
        });
    });



    /**
     * animate page navigation
     */
    $('.nav-link').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 3500);
        }
        return false;
    });


});


!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function i(){var b,c,d={height:f.innerHeight,width:f.innerWidth};return d.height||(b=e.compatMode,(b||!a.support.boxModel)&&(c="CSS1Compat"===b?g:e.body,d={height:c.clientHeight,width:c.clientWidth})),d}function j(){return{top:f.pageYOffset||g.scrollTop||e.body.scrollTop,left:f.pageXOffset||g.scrollLeft||e.body.scrollLeft}}function k(){if(b.length){var e=0,f=a.map(b,function(a){var b=a.data.selector,c=a.$element;return b?c.find(b):c});for(c=c||i(),d=d||j();e<b.length;e++)if(a.contains(g,f[e][0])){var h=a(f[e]),k={height:h[0].offsetHeight,width:h[0].offsetWidth},l=h.offset(),m=h.data("inview");if(!d||!c)return;l.top+k.height>d.top&&l.top<d.top+c.height&&l.left+k.width>d.left&&l.left<d.left+c.width?m||h.data("inview",!0).trigger("inview",[!0]):m&&h.data("inview",!1).trigger("inview",[!1])}}}var c,d,h,b=[],e=document,f=window,g=e.documentElement;a.event.special.inview={add:function(c){b.push({data:c,$element:a(this),element:this}),!h&&b.length&&(h=setInterval(k,250))},remove:function(a){for(var c=0;c<b.length;c++){var d=b[c];if(d.element===this&&d.data.guid===a.guid){b.splice(c,1);break}}b.length||(clearInterval(h),h=null)}},a(f).on("scroll resize scrollstop",function(){c=d=null}),!g.addEventListener&&g.attachEvent&&g.attachEvent("onfocusin",function(){d=null})});
