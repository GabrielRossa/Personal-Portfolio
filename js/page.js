$(document).ready(function(){
    var page = 0
    
    $(window).scroll(function(){
        $('.scroll-down').css("opacity", 1 - $(window).scrollTop()/100)
        
        var scroll = $(window).scrollTop()
        console.log(scroll)


        if(scroll > 0){
            $('.blur').css({filter: "blur(2rem)"})            
        }else{
            $('.blur').css({filter: "blur(0rem)"})
        }

        if(scroll > 0 && scroll<1000){            
            $('#about').css("opacity", 1)
            $('#about').css({visibility: "visible"})

            $('#tab-position').css({transform: "translateY(20rem)"})

        }else{
            $('#about').css("opacity", 0)
            $('#about').css({visibility: "hidden"})
        }

        if(scroll >= 1000 && scroll < 2000){
            $('#skills').css("opacity", 1)
            $('#skills').css({visibility: "visible"})
           
            $('#tab-position').css({transform: "translateY(-20rem)"})
        }else{
            $('#skills').css("opacity", 0)
            $('#skills').css({visibility: "hidden"})
        }

        if(scroll>= 2000 && scroll <4000){
            $('#solutions').css("opacity", 1)
            $('#solutions').css({visibility: "visible"})
            
            $('#solutions .keep').css("opacity", 1 - (scroll-2000)/200)

            $('#solutions .top').css({transform: "translatex("+ (1000-(scroll -2000))/9+"%)"})
            $('#solutions .bot').css({transform: "translatex("+ (-1000+(scroll -2000))/9+"%)"})
            
            if(scroll>= 2000 && scroll <= 2500){
                $('#devices').css({transform: "translateY(68rem)"})
            }else if(scroll >= 2500 && scroll < 3000){
                $('#devices').css({transform: "translateY(8rem)"})
            }else if(scroll >= 3000 && scroll < 3500){
                $('#devices').css({transform: "translateY(-38rem)"})
            }else if(scroll >= 3500&& scroll < 4000){
                $('#devices').css({transform: "translateY(-82rem)"})
            }else if(scroll<4000){
                $('#devices').css({transform: "translateY(132rem)"})            
            }
        }else{
            $('#solutions').css("opacity", 0)
            $('#solutions').css({visibility: "hidden"})
        }

        if(scroll >= 4000 && scroll < 5000){
            $('#projects').css("opacity", 1)
            $('#projects').css({visibility: "visible"})
            
            $('#projects .text').css("opacity", 1)
            $('#projects .slides img:nth-child(1), #projects .slides img:nth-child(2)').css({transform: "translateY(0)"})
            $('#projects .slides img:nth-child(3)').css({transform: "translateY(0rem)"})
            
        }else{
            $('#projects').css("opacity", 0)
            $('#projects').css({visibility: "hidden"})
            
            $('#projects .text').css("opacity", 0)
            $('#projects .slides img:nth-child(1), #projects .slides img:nth-child(2)').css({transform: "translateY(-10rem)"})
            $('#projects .slides img:nth-child(3)').css({transform: "translateY(10rem)"}) 
        }

        if(scroll>=5000){
            $('#contacts').css("opacity", 1)
            $('#contacts').css({visibility: "visible"})

            $('#insta, #mail, #linked').css({bottom: "calc(50% - 28.8rem)", top: "auto"})
            $('#insta').css({left: "calc(50% - 14.8rem)" , right: "auto"})
            $('#linked').css({left: "calc(50% - 2.4rem)", right: "auto"})
            $('#mail').css({left: "calc(50% + 10rem)", right: "auto"}) 

            $('.social-media img').css({width: "4.8rem"})

            $('header .socialmedia a img:hover').css({transform: "translateX(2rem)"})
        }else{
            $('#contacts').css("opacity", 0)
            $('#contacts').css({visibility: "hidden"})

            $('#insta, #mail, #linked').css({left: "3.5vw", right: "auto"})
            $('#insta').css({bottom: "14.9rem", top: "auto"})
            $('#linked').css({bottom: "9.7rem", top: "auto"})
            $('#mail').css({bottom: "4.5rem", top: "auto"}) 

            $('.social-media img').css({width: "2.8rem"})
        }
    })
})