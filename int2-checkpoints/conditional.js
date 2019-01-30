/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


draw = function() {
    background();
    //condition 1
    
    //color change
        //BLUE
        if(mouseX > 200 && mouseY < 200){
            background(184, 210, 252);
            fill(124, 174, 255);
            strokeWeight(4);
            stroke(57,0,200);
            ellipse(mouseX, mouseY, 30, 30);

        }
        //GREEN
         else if(mouseY > 200 && mouseX <200){
            background(196, 255, 202);
            fill(119, 244, 151);
            strokeWeight(4);
            stroke(33, 168, 68);
            rect(mouseX-20, mouseY-20, 30, 30);

        }
        //RED
         else if(mouseY < 200){
            background(255, 209, 217);
            fill(242, 113, 132);
            strokeWeight(4);
            stroke(145, 23, 41);
            triangle(mouseX-20, mouseY+15, mouseX, mouseY-10, mouseX+20, mouseY+15);

        }
        //PURPLE
        else {
            background(228, 199, 249);
            fill(216, 133, 252);
            strokeWeight(4);
            stroke(102, 32, 140);
            ellipse(mouseX, mouseY, 38, 25);
        }
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
