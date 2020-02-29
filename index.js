

// var canvas = document.getElementById('canvas'); 
// var ctx = canvas.getContext('2d'); 


var height =$(window).height();
var width =$(window).width();

// alert(`${height} ,${width}`)

$('.map').css('width', width)
$('.map').css('height', height)
var widthCard = $('.row2').height() + $('.row1').height()*2
var midcardT = height/2 - widthCard/2 ; 
var midcardL = width/2 - 50;
var heightbottom = height/2 - $('.row1').height() - $('.row2').height()/2

console.log($('row1').height())
$('.clientT').css('top', 0)
$('.clientT').css('left', midcardL)
$('.clientL').css('margin-top',+60 )
$('.clientR').css('margin-top',midcardT )
$('.clientR').css('right',0 )
$('.row3').css('margin-top', heightbottom )
$('.main').css('margin-top', heightbottom )
// var card1h

// $('.top')[0].children.forEach(element => {
//     element.css('left' , 10)
    
// });

// console.log($('.top')[0].children)



