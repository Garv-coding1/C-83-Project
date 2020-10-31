my_mouse = "";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "green";
width = 1;
var last_x, last_y;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    my_mouse = "mouseDown"
    color = document.getElementById("color_input").value;
    width = document.getElementById("width_input").value;
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    my_mouse="mouseLeave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    my_mouse="mouseUp";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (my_mouse == "mouseDown") {
        ctx.beginPath();
        ctx.lineWidth= width;
        ctx.strokeStyle = color;

        console.log("Last x and y coordinates are");
        console.log("X = " + last_x + ", Y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current x and y coordinates are");
        console.log("X = " + current_x + ", Y = " + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }

    last_x = current_x;
    last_y = current_y;

}

width = screen.width;
new_width = screen.width - 90;
new_height = screen.height - 300;

if (width < 992){
    document.getElementById("myCanvas").style.width = new_width;
    document.getElementById("myCanvas").style.height = new_height;
    document.body.style.overflow = "hidden";
}


canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{
    console.log("touchstart");
    color = document.getElementById("color_input").value;
    width_of_line = document.getElementById("width_input").value;
last_x = e.touches[0].clientX - canvas.offsetLeft;
    last_y = e.touches[0].clientY - canvas.offsetTop;
}



canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{

    console.log("touchmove");
     current_x = e.touches[0].clientX - canvas.offsetLeft;
     current_y = e.touches[0].clientY - canvas.offsetTop;

   
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_x + "y = " + last_y);
    ctx.moveTo(last_x, last_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_x + "y = " + current_y);
    ctx.lineTo(current_x, current_y);
    ctx.stroke();

    last_x = current_x; 
    last_y = current_y;
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}