//Creates Variables with DOM Elements to each
var newBGColor = document.getElementById("newBGColor");
var colorChangeButton = document.getElementById("colorChangeButton");

/*  EventListener for button
    Sets the body's background color to the user provide value */
colorChangeButton.addEventListener("click",function(){
    document.body.style.backgroundColor = newBGColor.value;
    
})