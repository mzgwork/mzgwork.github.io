//导航栏自定义js

var Layout = function () {

    // handle on page scroll
    var handleHeaderOnScroll = function() {
        if ($(window).scrollTop() > 60) {
            $("body").addClass("page-on-scroll");
        } else {
            $("body").removeClass("page-on-scroll");
        }
    }

    var handleHeaderFixed = function () {
        $(window).scroll(function() {
            if ($(".navbar").offset().top > 50) {
                $(".navbar").addClass("top-nav-collapse");
            } else {
                $(".navbar").removeClass("top-nav-collapse");
            }
        });

        $('.navbar-nav li a, .navbar-brand').on("click", function(event) {
            $(".navbar-collapse.in").collapse('hide');
        });
    }




    // handle go to top button
    var handleGo2Top = function () {
        var Go2TopOperation = function(){
            var CurrentWindowPosition = $(window).scrollTop();// current vertical position
            if (CurrentWindowPosition > 300) {
                $(".go2top").show();
            } else {
                $(".go2top").hide();
            }
        };

        Go2TopOperation();// call headerFix() when the page was loaded
        if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            $(window).bind("touchend touchcancel touchleave", function(e){
                Go2TopOperation();
            });
        } else {
            $(window).scroll(function() {
                Go2TopOperation();
            });
        }

        $(".go2top").click(function(e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, 600);
        });
    }

    var handleScrollspy = function() {
        var scrollspy = $('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 80
        });

        // fix active class on page load
        setTimeout(function() {
            $(window).scroll();
        }, 1000);
    }

    return {
        init: function () {
            // handle go to top button
            handleGo2Top();

            // initial setup for fixed header
            handleHeaderOnScroll();

            // animated navbar toggle
            handleHeaderFixed();




            // Handle one page scrollspy
            handleScrollspy();

            // handle minimized header on page scroll
            $(window).scroll(function() {
                handleHeaderOnScroll();
                handleHeaderFixed();

            });
        },

        // To get the correct viewport width based on  http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
        getViewPort: function() {
            var e = window,
                a = 'inner';
            if (!('innerWidth' in window)) {
                a = 'client';
                e = document.documentElement || document.body;
            }

            return {
                width: e[a + 'Width'],
                height: e[a + 'Height']
            };
        },
    };
}();