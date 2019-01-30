/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 100; 
var yPos = 100;
var weight = 2;

draw = function() {
    // Draws Circle from Up Left to Low Right 
    strokeWeight (weight);
    stroke (50,0,217);
    fill (0,215,150);
    ellipse(xPos,yPos,50,50);
    xPos = xPos + 10;
    yPos = yPos + 10;
    
     // Draws Circle from Up Left to Low Right 
    strokeWeight (5);
    stroke (50,0,217);
    fill (0,150,270);
    ellipse(xPos,yPos,50,50);
    xPos = xPos + 10;
    yPos = yPos + 10;
    
     // Draws Circle from Low Left to Up Right 
    strokeWeight (7);
    stroke (50,0,217);
    fill (0,200,80);
    ellipse(xPos,height - yPos,50,50);
    xPos = xPos + 15;
    yPos = yPos + 15;
    
    // Draws Circle from Low Left to Up Right 
    strokeWeight (1);
    stroke (50,0,217);
    fill (20,150,170);
    ellipse(xPos,height-yPos,50,50);
    xPos = xPos + 5;
    yPos = yPos + 5;
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
