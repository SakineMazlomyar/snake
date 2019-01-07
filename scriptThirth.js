
var snake = [
    {x: 350, y: 300},
    {x: 340, y: 300},
    {x: 330, y: 300},
    {x: 320, y: 300},
    {x: 310, y: 300}
]
var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");

drawSnake();

function drawSnake() {
        // loop through the snake parts drawing each part on the canvas
snake.forEach(function drawSnakePart(snakePart) {

context.fillStyle = "blue";
context.fillRect(snakePart.x, snakePart.y, 10, 10);
context.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

)};
moveSnake();

var xSpeed = 10;
var ySpeed = 10;
function moveSnake() {
        // loop through the snake parts drawing each part on the canvas
snake.forEach(function setInterval(snakeCordinate){
    snakeCordinate.x += xSpeed
    snakeCordinate.y += ySpeed
    

    //eatFood(x, y, foodPos.x, foodPos.y, context)
/*     if(snakeCordinate.x + width >590 || snakeCordinate.x < 0){
        clearInterval(snakeInterval)
        clearInterval(foodInterval)
    }
    if(snakeCordinate.y + heigt >590 ||  snakeCordinate.y < 0){
        clearInterval(snakeInterval)
        clearInterval(foodInterval)
    } */
}
)}