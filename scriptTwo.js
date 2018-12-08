//1-class
//2-object

var s = setInterval(draw, 30);

var x = 1;
var y = 0;
var xspeed = 1;
var yspeed = 1;
function draw(){
    
    var myCanvas = document.querySelector("canvas#myCanvas");
    var context = myCanvas.getContext("2d");
    context.clearRect(x, y, innerWidth, innerHeight); // clear canvas
    context.fillStyle = "red";
    
    x += xspeed
    context.fillRect(x, y, 10, 10);
    if(x >600 || x < 0){
        clearInterval(s)
    }
    console.log(y)
    if(y >500 || y < 0){
        
        clearInterval(s)
    }

}
function directions(){
    document.onkeydown = function(key){
        if (key.keyCode == '38') {
            yspeed = yspeed
            // up arrow
        }
        else if (key.keyCode == '40') {
            yspeed = -yspeed

            // down arrow
        }
        else if (key.keyCode == '37') {
            xspeed = -xspeed

           // left arrow
        }
        else if (key.keyCode == '39') {
            xspeed = xspeed
           // right arrow
        }
    }  
}
directions()










