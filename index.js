var x = document.querySelectorAll(".type").length

for(var i=0;i<x;i++) {

document.querySelectorAll(".type")[i].addEventListener("click",function(){
      var buttoninnerHTML= this.innerHTML;
 
      makesound(buttoninnerHTML);
      buttonAnimation(buttoninnerHTML);

      });}
//2. detection of key board press


document.addEventListener("keypress",function(event){


  makesound(event.key);
  buttonAnimation(event.key);
});

function makesound(key) {
      switch (key) {
            case "m":
            var crash  = new Audio('audio folder/crash.mp3');
            crash.play();
            break;
            case "n":
            var kick = new Audio("audio folder/kick-bass.mp3");
            kick.play();
            break;
            case"o":
            var tom1 = new Audio("audio folder/tom-1.mp3");
            tom1.play();
            case "p":
            var tom3 = new Audio("audio folder/tom-3.mp3");
            tom3.play();
            case "q":
            var tom4 = new Audio("audio folder/tom-4.mp3");
            tom4.play();
            default:
                    console.log(key);
}}
function buttonAnimation(currentKey) {  

      

      var animation = document.querySelector("." + currentKey);
      animation.classList.add("Fucked");
      setTimeout(function() {
            animation.classList.remove("Fucked")
      }, 100);
}
