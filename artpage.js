/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var circleX = 70;
var circleY = 190.5;
var cWidth = 30;
var cLength = 30; 
var trix1 = 55;
var triy1 = 212;
var trix2 = 70;
var triy2 = 187;
var trix3 = 85; 
var triy3 = 212;
var rectX;
var rectY;

 
//gray background 
    background(151, 151, 153);

//function that draws a white rain cloud using circles
function drawCloud(){
        noStroke();
    //left & right-most circles (2)
        ellipse(circleX-15,circleY-90,cWidth+40,cLength+40);
        ellipse(circleX+270,circleY-90,cWidth+40,cLength+40);
    //middle circles -- to fill gaps (4)
        ellipse(circleX+30,circleY-90,cWidth+40,cLength+40);
        ellipse(circleX+80,circleY-90,cWidth+40,cLength+40);
        ellipse(circleX+130,circleY-90,cWidth+40,cLength+40);
        ellipse(circleX+180,circleY-90,cWidth+40,cLength+40);
    //top row of circles
        ellipse(circleX+25,circleY-120,cWidth+40,cLength+40);
        ellipse(circleX+75,circleY-130,cWidth+40,cLength+40);
        ellipse(circleX+125,circleY-135,cWidth+40,cLength+40);
        ellipse(circleX+175,circleY-130,cWidth+40,cLength+40);
        ellipse(circleX+225,circleY-120,cWidth+40,cLength+40);
    //bottom row of circles
        ellipse(circleX+25,circleY-60,cWidth+40,cLength+40);
        ellipse(circleX+75,circleY-50,cWidth+40,cLength+40);
        ellipse(circleX+125,circleY-45,cWidth+40,cLength+40);
        ellipse(circleX+175,circleY-50,cWidth+40,cLength+40);
        ellipse(circleX+225,circleY-60,cWidth+40,cLength+40);
}

//function that draws all raindrops using triangles and circles
function drawRaindrops(){
//draws regular raindrops (always visible)
    //draws raindrop 1 (left to right)
        ellipse(circleX,circleY+25,cWidth,cLength);
        triangle(trix1, triy1, trix2, triy2, trix3, triy3);
    //draws raindrop 2 (left to right)
        ellipse(circleX+65,circleY+100,cWidth,cLength);
        triangle(trix1+65, triy1+75, trix2+65, triy2+75, trix3+65, triy3+75);
    //draws raindrop 3 (left to right)
        ellipse(circleX+130,circleY+45,cWidth,cLength);
        triangle(trix1+130, triy1+20, trix2+130, triy2+20, trix3+130, triy3+20);
    //draws raindrop 4 (left to right)
        ellipse(circleX+195,circleY+100,cWidth,cLength);
        triangle(trix1+195, triy1+75, trix2+195, triy2+75, trix3+195, triy3+75);
    //draws raindrop 5 (left to right)
        ellipse(circleX+260,circleY+25,cWidth,cLength);
        triangle(trix1+260, triy1, trix2+260, triy2, trix3+260, triy3);

//function that draws HIDDEN rain drops (bottom row)
    //drop 1 (left to right)
        ellipse(circleX,circleY+175,cWidth,cLength);
        triangle(trix1, triy1+150, trix2, triy2+150, trix3, triy3+150);
    //drop 2 (left to right)
        ellipse(circleX+130,circleY+155,cWidth,cLength);
        triangle(trix1+130, triy1+130, trix2+130, triy2+130, trix3+130, triy3+130);
    //drop 3 (left to right)
        ellipse(circleX+260,circleY+175,cWidth,cLength);
        triangle(trix1+260, triy1+150, trix2+260, triy2+150, trix3+260, triy3+150); 
}

//adjusts the rate the blue color of the raindrops change
    frameRate(10);

draw = function() {
    noStroke();
//calling function that creates white cloud
    fill (255, 255, 255);
    drawCloud();
//sets fill color of raindrops as random blue shades    
    var r = random(66);
    var g = random(206);
    fill (r,g,216)
//calling function that creates raindrops
    drawRaindrops();
    
//if the x and y positions of the mouse are on the cloud, move the rectangle hiding the drops
        if (mouseX>40 && mouseX<430 && mouseY>50 && mouseY<195){
        var rectX = 500;
        var rectY = 500;
        }
//if mouse is off cloud, x and y position of rectangle covers raindrops   
        else {
        var rectX = 40;
        var rectY = 315;
        }
        
//draws rectangle that covers bottom row of raindrops       
        fill(151, 151, 153);
        rect (rectX, rectY, 320, 70);

//for loop to create triangular grass 
    for (var i = 1; i < width; i += 10) {
    strokeWeight(3);
    stroke(33, 145, 109);
    fill(33, 145, 109);
    triangle(i, 400, i+5, 385, i+10, 400);
    }
}
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
