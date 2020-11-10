
//LOADER
window.addEventListener("load", function(){
    var loader = document.querySelector(".loader-wrapper");

    loader.classList.add("hidden");
});

//sticky navbar


$(document).ready(function(){
  
    /*for the sticky navigation*/
    $('.js--header__text-box').waypoint(function(direction){
        if(direction=="down"){
            $('nav').removeClass('header__navigation');
            $('nav').addClass('sticky');
            $('.gototop-btn').addClass('visible');
            
        }else{
            $('nav').removeClass('sticky');
            $('nav').addClass('header__navigation');
            $('.gototop-btn').removeClass('visible');
        }
    }, {
  offset: '60px'
    });

    //Nav to element

    $('.js--scroll-to-about').click(function (){
        $('html,body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
    });

    $('.js--scroll-to-catalog').click(function (){
        $('html,body').animate({scrollTop: $('.js--section-catalog').offset().top}, 1000);
    });

    $('.js--scroll-to-form').click(function (){
        $('html,body').animate({scrollTop: $('.js--section-form').offset().top}, 1000);
    });

    
});


//Responsive navbar

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const menuBox = document.getElementsByClassName('header__menu-box')[0]

toggleButton.addEventListener('click', () =>{
    menuBox.classList.toggle('active');
});



const topButton = document.querySelector(".gototop-btn");

topButton.addEventListener("click", function(){
    //window.scrollTo(0,0);

    /*window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"

        
    });*/

    $("html, body").animate({scrollTop:0}, "slow");
});


//CROSS ICON

const menuBtn = document.querySelector('.toggle-button');
let menuOpen = false;

menuBtn.addEventListener("click", function(){

    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
})


