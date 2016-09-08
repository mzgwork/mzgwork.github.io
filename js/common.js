//导航栏自定义js

var Layout = function () {

    var handleHeaderOnScroll = function() {
        if ($(window).scrollTop() > 100) {
            $(".my-navbar-default").addClass("onChange");
        } else {
            $(".my-navbar-default").removeClass("onChange");
        }
    }

    var handleHeaderFixed = function () {
        $(window).scroll(function() {
            if ($(".my-navbar-scrollspy").offset().top > 50) {
                $(".my-navbar-scrollspy").addClass("my-nav-collapse");
            } else {
                $(".my-navbar-scrollspy").removeClass("my-nav-collapse");
            }
        });
    }

    return {
        init: function () {
            handleHeaderOnScroll();
            handleHeaderFixed();
            $(window).scroll(function() {
                handleHeaderOnScroll();
                handleHeaderFixed();

            });
        }
    };
}();