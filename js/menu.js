$(document).ready(function(){
    $(window).scroll(function(){
        
        var scroll = $(window).scrollTop()

        if(scroll == 0){
            $('#menu-pos').css({transform: "translateY(7.8rem)"})
            
            $('.menu a').css({filter: "invert(100%) sepia(3%) saturate(299%) hue-rotate(320deg) brightness(117%) contrast(90%)"})
            
            $('#icon-0').css({filter: "invert(22%) sepia(93%) saturate(2332%) hue-rotate(336deg) brightness(93%) contrast(107%)"})

        }else if(scroll > 0 && scroll < 1000){
            $('#menu-pos').css({transform: "translateY(-18.9rem)"})
            
            $('.menu a').css({filter: "invert(100%) sepia(3%) saturate(299%) hue-rotate(320deg) brightness(117%) contrast(90%)"})
            
            $('#icon-1').css({filter: "invert(22%) sepia(93%) saturate(2332%) hue-rotate(336deg) brightness(93%) contrast(107%)"})
        }else if (scroll >= 1000 && scroll < 2000){
            $('#menu-pos').css({transform: "translateY(-23.2rem)"})
            
            $('.menu a').css({filter: "invert(100%) sepia(3%) saturate(299%) hue-rotate(320deg) brightness(117%) contrast(90%)"})
            $('.social-media a').css({filter: "invert(100%) sepia(3%) saturate(299%) hue-rotate(320deg) brightness(117%) contrast(90%)"})
            $('.logo').css({filter: "none"})
                        
            $('#icon-2').css({filter: "invert(22%) sepia(93%) saturate(2332%) hue-rotate(336deg) brightness(93%) contrast(107%)"})
        }else if (scroll >= 2000 && scroll < 4000){
            $('#menu-pos').css({transform: "translateY(-27.5rem)"})
            
            $('.menu a').css({filter: "invert(24%) sepia(7%) saturate(10%) hue-rotate(353deg) brightness(98%) contrast(89%)"})
            $('.social-media a').css({filter: "invert(24%) sepia(7%) saturate(10%) hue-rotate(353deg) brightness(98%) contrast(89%)"})
            $('.logo').css({filter: "invert(24%) sepia(7%) saturate(10%) hue-rotate(353deg) brightness(98%) contrast(89%)"})
            
            $('#icon-3').css({filter: "invert(22%) sepia(93%) saturate(2332%) hue-rotate(336deg) brightness(93%) contrast(107%)"})

        }else if (scroll >= 4000 && scroll < 5000){
            $('#menu-pos').css({transform: "translateY(-31.8rem)"})
            
            $('.menu a').css({filter: "invert(100%) sepia(3%) saturate(299%) hue-rotate(320deg) brightness(117%) contrast(90%)"})
            $('.social-media a').css({filter: "invert(100%) sepia(3%) saturate(299%) hue-rotate(320deg) brightness(117%) contrast(90%)"})
            $('.logo').css({filter: "none"})
                        
            $('#icon-4').css({filter: "invert(22%) sepia(93%) saturate(2332%) hue-rotate(336deg) brightness(93%) contrast(107%)"})
        }else{
            $('#menu-pos').css({transform: "translateY(-36.1rem)"})
            
            $('.menu a').css({filter: "invert(100%) sepia(3%) saturate(299%) hue-rotate(320deg) brightness(117%) contrast(90%)"})
            
            $('#icon-5').css({filter: "invert(22%) sepia(93%) saturate(2332%) hue-rotate(336deg) brightness(93%) contrast(107%)"})
        }
    })
})