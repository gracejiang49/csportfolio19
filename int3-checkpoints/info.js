//creates variables to embed each DOM elements within each 
var puppy = document.getElementById("puppy");
var kittens = document.getElementById("kittens"); 
var display = document.getElementById("display");
/*  EventListener for puppy image
    Adds description for innerHTML about kittens */
puppy.addEventListener("click", function(){
    display.innerHTML = "A cute puppy brings happiness!!"
}); 
/*  EventListener for kittens image
    Adds description for innerHTML about kittens */
kittens.addEventListener("click", function(){
    display.innerHTML = "A bunch of kittens are fun and cozy!!"
});