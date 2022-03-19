var mouseEvent="empty";

canvas - document.getElementById("myCanvas");
ctx=canvas.getContext("2d")

color="pink";
width_of_line=2;

canvas.addEventListner("mousedown" , my_mousedown)
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseDown";
}
canvas.addEventListner("mousemove",my_mousemove);
function my_mousemove(e){
    var current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    var current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        console.log("Current Position Of X And Y Coordinates = ")
        console.log("X ="+current_)
    }
}