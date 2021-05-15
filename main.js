canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
var rover_x=10;
var rover_y=10;
var rover_width=69;
var rover_height=69;

function uploadcar(){
    ctx.drawimage(car_imgTag, car_x, car_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down")
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
}

function up()
{
    if(rover_y>=0)
    {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed =" + rover_x + " - " +rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down()
{
    if(rover_y<=500)
    {
        rover_y = rover_y+10;
        console.log("When down arrow is pressed, x ="+ rover_x +" | y = "+rover_y);
        uploadBackground();
        uploadrover();
    }


}

function left()
{
    if(rover_x>=0)
    {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed =" + rover_x + " - " +rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right()
{
    if(rover_x<=700)
    {
        rover_x = rover_x + 10;
        console.log("When up arrow is pressed =" + rover_x + " - " +rover_y);
        uploadBackground();
        uploadrover();
    }

}
