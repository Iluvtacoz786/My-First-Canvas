canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="purple";
ctx.lineWidth=4;
ctx.arc(450,300,40,0,360);
ctx.stroke();
canvas.addEventListener("mousedown",draw);
function draw(e){
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    circle(mouse_x, mouse_y);
}
function circle(mouse_x, mouse_y){
    ctx.beginPath();
ctx.strokeStyle="purple";
ctx.lineWidth=4;
ctx.arc(mouse_x,mouse_y,40,0,360);
ctx.stroke();
}