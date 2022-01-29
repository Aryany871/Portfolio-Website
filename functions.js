// Add active class to the current link on navbar (highlight it)
var links = document.getElementsByClassName("link");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });

}

//add active class for current section on scroll
window.addEventListener("scroll",()=>{
  var l = window.scrollY;

  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");

  if(l<600){
    document.getElementById("sec1_link").className += " active";
  }  

  else if( l>=600 && l<1368){
    document.getElementById("sec2_link").className += " active";
  }

  else{
    document.getElementById("sec3_link").className += " active";
  }
}
)


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





