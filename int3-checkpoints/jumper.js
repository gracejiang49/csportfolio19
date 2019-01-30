var jumper = document.getElementById("jumper");
jumper.style.position="absolute";
jumper.addEventListener("mousemove",function(){
    jumper.style.top = Math.random() * 200 + "px";
    jumper.style.left = Math.random() * 200 + "px";
})