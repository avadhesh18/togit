

$(document).on('click', 'a[tagert^="_notinapp"]', function (e) {
var url = $(this).attr('href');
navigator.app.loadUrl(url, { openExternal: true });
e.preventDefault();
});

$("#searchbtn").click(function(){
	
$("nav form").fadeIn();
$(".nav-wrapper").hide();
setTimeout(function() { $('input[type="search"]').focus() }, 100);

});

$("#cls").click(function(){

$("nav form").fadeOut("100",function ()
{
	
		$(".nav-wrapper").fadeIn("100");
}
);
});

$(".close").click(function(){
$(".searchform").fadeOut();
});

function getParameterByName(name) {
name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
results = regex.exec(location.search);
return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var titlepage =  getParameterByName("title");
$("#titlepage").html(titlepage);

var menu = '<li><div class="user-view"><div class=""><img src="xhd.png" width="96"></div>  <span class="name"><h5>LyricsNext</h5></span>  </div></li> <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li> <li><a href="#!">Second Link</a></li> <li><div class="divider"></div></li> <li><a class="subheader">Subheader</a></li> <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>';

$("#slide-out").html(menu);

var loading = '<div class="preloader-wrapper small active"> <div class="spinner-layer spinner-blue-only"> <div class="circle-clipper left"> <div class="circle"></div> </div><div class="gap-patch"> <div class="circle"></div> </div><div class="circle-clipper right"> <div class="circle"></div> </div> </div> </div>';

$("#loading").html(loading);
function myTimeoutFunction()
{
 $('.carousel').carousel('next');
}

myTimeoutFunction();
setInterval(myTimeoutFunction, 3900);



 $(".button-collapse").sideNav();
  $('.collapsible').collapsible();
  $('.button-collapse').sideNav({
      menuWidth: 280, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens,
   
    }
  );
        

  $('.carousel.carousel-slider').carousel({fullWidth: true});


function init() {
var imgDefer = document.getElementsByTagName('img');
for (var i=0; i<imgDefer.length; i++) {
if(imgDefer[i].getAttribute('data-src')) {
imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
} } }
window.onload = init;




