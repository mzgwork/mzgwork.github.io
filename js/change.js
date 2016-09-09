     
$(function(){


    // 导航栏固定
     $(window).on('scroll', function(){

         if ($(this).scrollTop() > 60) {
             $(".my-navbar-default").addClass("onChange");
         } else {
             $(".my-navbar-default").removeClass("onChange");
         }
        
     });



    // 点击导航栏 页面动画到锚点
    $(".my-navbar-nav a").click(function() {
        $("html,body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 60  + "px"
        }, 1000);
        // $(this).parent('li').addClass('active').siblings('li').removeClass('active')
        return false;
    });


    // 页面滚动  导航切换 active
    $(window).on('scroll', function(){
        
        var winTop = $(document).scrollTop();
        if (winTop > $('#skill').offset().top) {
            $('a[href="#contact"]').parent('li').addClass('active').siblings('li').removeClass('active');
            $('.project .gallery-item .animated').removeClass('go');
            $('.skill .animatedParent .animated').addClass('go');
        } else if (winTop > $('#project').offset().top - 50) {
            $('a[href="#skill"]').parent('li').addClass('active').siblings('li').removeClass('active');
        } else if (winTop > $('#project').offset().top - 100) {
            $('a[href="#project"]').parent('li').addClass('active').siblings('li').removeClass('active');
            $('.project .gallery-item .animated').addClass('go');
            $('.skill .animatedParent .animated').removeClass('go');

        } else if (winTop > $('#about').offset().top - 100) {
            $('.project .gallery-item .animated').addClass('go');
            $('.index .animatedParent .animated').removeClass('go');
            $('a[href="#about"]').parent('li').addClass('active').siblings('li').removeClass('active');

        } else {
            $('.index .animatedParent .animated').addClass('go');
            $('a[href="#index"]').parent('li').addClass('active').siblings('li').removeClass('active');

        }




    
    
    });

});