// Add active class to the current link on navbar (highlight it)
var links = document.getElementsByClassName("link");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });

}

//function for buttons when they are clicked
function click_link(section){

    document.getElementById(section).click();
    
}

//responsive burger menu
var navbar=document.querySelector(".container");
var author=document.querySelector("#author");

var menu=document.querySelector(".burgermenu");
menu.addEventListener("click",function(){

 navbar.classList.toggle("navbar-resp");
 author.classList.toggle("author-resp");

 for (var i = 0; i < links.length; i++) {
    links[i].classList.toggle("link-resp");
 }

 

});