//导航栏自定义js

//var Layout = function () {
//
//    var handleHeaderOnScroll = function() {
//        if ($(window).scrollTop() > 100) {
//            $(".my-navbar-default").addClass("onChange");
//        } else {
//            $(".my-navbar-default").removeClass("onChange");
//        }
//    }
//
//    var handleHeaderFixed = function () {
//        $(window).scroll(function() {
//            if ($(".my-navbar-scrollspy").offset().top > 50) {
//                $(".my-navbar-scrollspy").addClass("my-nav-collapse");
//            } else {
//                $(".my-navbar-scrollspy").removeClass("my-nav-collapse");
//            }
//        });
//    }
//
//    return {
//        init: function () {
//            handleHeaderOnScroll();
//            //handleHeaderFixed();
//            $(window).scroll(function() {
//                handleHeaderOnScroll();
//               // handleHeaderFixed();
//
//            });
//        }
//    };
//}();

//监听页面滚动到的位置
$(function () {
    $(window).on('scroll', function(){
        var winTop = $(document).scrollTop();
        if (winTop > $('#skill').offset().top) {
            $('a[href="#contact"]').parent('li').addClass('active').siblings('li').removeClass('active');
        } else if (winTop > $('#project').offset().top - 50) {

            $('a[href="#skill"]').parent('li').addClass('active').siblings('li').removeClass('active');
        } else if (winTop > $('#project').offset().top - 100) {

            $('a[href="#project"]').parent('li').addClass('active').siblings('li').removeClass('active');

        } else if (winTop > $('#about').offset().top - 100) {

            $('a[href="#about"]').parent('li').addClass('active').siblings('li').removeClass('active');

        } else {

            $('a[href="#index"]').parent('li').addClass('active').siblings('li').removeClass('active');

        }
})
