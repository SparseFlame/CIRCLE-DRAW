var mouseEvent = "empty";
var lx , ly;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "blue";
width = 10;
canvas.addEventListener("mouseDown", functionname);
function functionname(e){
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseMove", functionname2);
function functionname2(e){
    curposmox = e.clientX - canvas.offsetLeft;
    curposmoy = e.clientY - canvas.offsetTop;

    if (mouseEvent = "mouseDown") {
    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("Last Position of X and Y Cordinates = ");
        console.log("X = " + lx + ",Y = " + ly);
        ctx.moveTo(lx, ly);
        console.log("Current Position of X and Y Cordinates = ");
        console.log("X = " + curposmox + ",Y = " + curposmoy);
        ctx.arc(200, 200, 40, 0, 2*Math.PI);
        ctx.stroke();
    }
}

canvas.addEventListener("mouseUp", mup);

function mup(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseLeave", mle);

function mle(e){
    mouseEvent = "mouseLeave";
}
