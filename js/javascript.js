



$(document).ready(function() {	

    var id = '#dialog';

    //Get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    //Set heigth and width to mask to fill up the whole screen
    $('#mask').css({'width':maskWidth,'height':maskHeight});
    
    //transition effect		
    $('#mask').fadeIn(500);	
    $('#mask').fadeTo("slow",0.9);	

    //Get the window height and width
    var winH = $(window).height();
    var winW = $(window).width();
          
    //Set the popup window to center
    $(id).css('top',  winH/2-$(id).height()/2);
    $(id).css('left', winW/2-$(id).width()/2);

    //transition effect
    $(id).fadeIn(2000); 	

//if close button is clicked
$('.window .close').click(function (e) {
    //Cancel the link behavior
    e.preventDefault();
    
    $('#mask').hide();
    $('.window').hide();
});		

//if mask is clicked
$('#mask').click(function () {
    $(this).hide();
    $('.window').hide();
});		

});

/* later*/

function createGreeting() {
    var hourNow = prompt('Enter a number between 0 & 23');
    var greeting = "";

if (hourNow > 18 && hourNow < 24) {
    greeting = 'Good Evening';
} else if (hourNow > 12 && hourNow < 18) {
greeting = ' Good afternoon!';
} else if (hourNow > 0 && hourNow < 12) {
greeting = 'Good morning!';
} else {
greeting = 'Welcome!' ;
}
return greeting;
}
/*
var bulbclick = prompt('How many times to click the bulb?')

var orderImages= '';
var numberOfImages;


*/
