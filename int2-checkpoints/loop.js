/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

    //Background Color (overall) 
        background(239, 188, 255);
    //For Loop
        for (var i = 0; i < width; i += 40) {
            for (var j = 0; j < height; j += 40) {
                var shape = random(50);
            //Design of Shapes 
                fill(random(245), random(193), random(255));
                stroke(random(218), random(255), random(193));
            //Shape Type 
                rect(i, j, shape, shape);
            }
        }
        
        for (var i = 0; i < width; i += 40) {
            for (var j = 0; j < height; j += 40) {
                var shape = random(50);
            //Design of Shapes 
                fill(random(245), random(193), random(255));
                stroke(random(218), random(255), random(193));
            //Shape Type 
                ellipse(i, j, shape, shape); 
            }
        }

        draw = function() {
        

        };

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }   
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
