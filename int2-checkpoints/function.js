/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

background(221, 239, 255);

//function that draws the molecule
function molecule (x,y){
    //draws big red atom
    stroke(255,255,255);
    fill(216, 75, 75);
    ellipse(x+20, y-10, 50, 50);
    //draws smaller green atoms (2)
    fill(78, 191, 87);
    ellipse(x+70, y-45, 30, 30);
    ellipse(x+20, y+50, 30, 30);
    //purple right extension atom 
    fill(132, 79, 175);
    ellipse(x+125, y-45, 30, 30);
    //draws chemical bond lines between atoms
    stroke(0,0,0);
    strokeWeight(3);
    line(x+110, y-45, x+85, y-45);
    line(x+20, y+35, x+20, y+15);
    line(x+40, y-25, x+58, y-40);
}

//Allows molecule to appear where mouse clicks
mouseClicked = function(){
    molecule(mouseX, mouseY);
}


draw = function() {
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);

