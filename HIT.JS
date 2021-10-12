var canvas = new fabric.Canvas("mycan");
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=400;

function new_image()
{
    fabric.image.fromURL("ball.png", function(img){
        ball_obj=img;
        ball_obj.scaletowidth(50);
        ball_obj.scaletoheight(50);
        ball_obj.set({
            top:ball_y,
        left.ball_x
        });
    canvas.add(ball.ball_obj);
    })
}

function load_image()
{
    fabric.image.fromURL("hole.png", function(img){
        hole_obj=img;
        hole_obj.scaletowidth(50);
        hole_obj.scaletoheight(50);
        hole_obj.set({
            top:hole_y,
        left.hole_x
        });
    canvas.add(hole_obj);
    });
}

if((ball_x==hole_x)&&(ball_y==hole)){
    canvas.remove(ball.ball_obj);
}

document.getElementById("hd3").innerHTML="YOU HAVE HIT THE GOAL !! "
document.getElementById("mycan").style.borderColor="red";

function down {
    ball_y = ball_x + block image innerHeight;
    console.log("block imcge height =" + block_image_height;
    console.log("When down arrow is pressed, x =-," +ball_x + ' , y= ' + ball_y;)
}