$(window).load(function(){
    delayTime=6500;
    fadeInTime=700;
    $(".logo").delay(delayTime).fadeIn(fadeInTime);
    $(".section .wrap .change-text").delay(delayTime).fadeIn(fadeInTime);
    setTimeout(function(){
        $(".header .nav").css({opacity:1});
    },delayTime);
    $(".footer").delay(delayTime).fadeIn(fadeInTime);
    $(".section .wrap .scroll").delay(delayTime).fadeIn(fadeInTime);
    $(".side").delay(delayTime).fadeIn(fadeInTime);
    $(".section .wrap .img-wrapper").delay(delayTime).fadeIn(fadeInTime);
    $(".section .wrap .article .text-wrapper").delay(delayTime).fadeIn(fadeInTime);
    
})
$(function(){
    $(window).mousemove(function (event) {
        x = event.clientX;
        y = event.clientY; 
        $(".cursor").animate({left:x, top:y},1)
    });
    $(".logo, .nav, .menu, .contact").mouseover(function(){
        $(".circle").css({width:50,height:50,background:"transparent"})
    }).mouseout(function(){
        $(".circle").css({width:5,height:5,background:"#000"})
    })
    $(".logo").mouseover(function(){
        $(this).css({height:110})
        $(".header .logo p:nth-child(2)").css({left:0})
        $(".header .logo p:nth-child(3)").css({left:0})
    }).mouseout(function(){
        $(this).css({height:30})
        $(".header .logo p:nth-child(2)").css({left:-300})
        $(".header .logo p:nth-child(3)").css({left:-300})
    });

    $(".section .wrap .img-wrapper img").mouseover(function(){
        $(".circle").css({width:700,height:700,background:"transparent"})
        $(".zoom").stop().fadeIn();
        $(".section .wrap .img-wrapper p").stop().fadeIn();
    }).mouseout(function(){
        $(".circle").css({width:5,height:5,background:"#000"})
        $(".zoom").stop().fadeOut();
        $(".section .wrap .img-wrapper p").stop().fadeOut();
    })

    sw=0;
    $(".nav").click(function(){
        if(sw==0){
            $(".menu").addClass("move");
            $(this).addClass("close");
            sw=1;
        } else if(sw==1){
            $(".menu").removeClass("move");
            $(this).removeClass("close");
            sw=0;
        }
    });

    $(".article .text-wrapper .more").click(function(){
        ww=$(window).width();
        $(this).css({width:ww, height:"100vh", top:0, left:0, background:"#000"})
    })

    document.addEventListener("scroll", function(){
        ws=window.scrollY;
        wh=window.innerHeight;
        a=$(".article1").offset().top;
        b=$(".article2").offset().top;
        c=$(".article3").offset().top;
        d=$(".article4").offset().top;
        e=$(".article5").offset().top;
        if (ws > b-wh/2){
            $(".section .wrap .img-wrapper .img2").css({left:0,opacity:1})
            $(".section .wrap .change-text .container").css({marginTop:-30})
            $(".header .menu .p-wrapper p a").removeClass("active");
            $(".header .menu .p-wrapper p:nth-child(2) a").addClass("active");
        } else if (ws < b-wh/2){
            $(".header .menu .p-wrapper p a").removeClass("active");
            $(".header .menu .p-wrapper p:nth-child(1) a").addClass("active");
            $(".section .wrap .img-wrapper .img2").css({left:"-100%",opacity:0})
            $(".section .wrap .change-text .container").css({marginTop:0})
        }else {
            $(".section .wrap .img-wrapper .img2").css({left:"-100%",opacity:0})
            $(".section .wrap .change-text .container").css({marginTop:0})
        }
        if (ws > c-wh/2){
            $(".section .wrap .img-wrapper .img3").css({left:0,opacity:1})
            $(".section .wrap .change-text .container").css({marginTop:-60})
            $(".header .menu .p-wrapper p a").removeClass("active");
            $(".header .menu .p-wrapper p:nth-child(3) a").addClass("active");
        } else {
            $(".section .wrap .img-wrapper .img3").css({left:"-100%",opacity:0})
        }
        if (ws > d-wh/2){
            $(".section .wrap .img-wrapper .img4").css({left:0,opacity:1})
            $(".section .wrap .change-text .container").css({marginTop:-90})
            $(".header .menu .p-wrapper p a").removeClass("active");
            $(".header .menu .p-wrapper p:nth-child(4) a").addClass("active");
        } else {
            $(".section .wrap .img-wrapper .img4").css({left:"-100%",opacity:0})
        }
        if (ws > e-wh/2){
            $(".section .wrap .img-wrapper .img5").css({left:0,opacity:1})
            $(".section .wrap .change-text .container").css({marginTop:-120})
            $(".header .menu .p-wrapper p a").removeClass("active");
            $(".header .menu .p-wrapper p:nth-child(5) a").addClass("active");
        } else {
            $(".section .wrap .img-wrapper .img5").css({left:"-100%",opacity:0})
        }
    })

    //scroll
    var this_scroll = 0;
    $(window).scroll(function(e) {
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            $(".section .wrap .scroll").delay(1000).stop().fadeIn(800);
        }, 100));
        if ($(window).scrollTop() > this_scroll) {
            $(".section .wrap .scroll").hide();
        } else if($(window).scrollTop() < this_scroll){
            $(".section .wrap .scroll").hide();
        }
        this_scroll = $(window).scrollTop()
    });//scroll

    $(".section .wrap .img-wrapper img").click(function(){
        indexNum=$(this).index();
        console.log(indexNum);
        $(".cursor").fadeOut();
        $(".modal").eq(indexNum).fadeIn().css({width:"100%", height:"100vh", top:0, left:0});
        $(".modal-section").delay(1000).fadeIn()
    })
    $(".modal .close").click(function(){
        $(".cursor").fadeIn();
        $(".modal").css({width:"0", height:"0", top:"50%", left:"40%"}).delay(700).fadeOut();
        $(".modal-section").fadeOut()
    })

    $(".header .menu .p-wrapper p a").click(function(){
        $(".header .menu .p-wrapper p a").removeClass("active");
        $(this).addClass("active");
    })
})//fx
