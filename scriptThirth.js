
var snake = [
    {x: 350, y: 300},
    {x: 340, y: 300},
    {x: 330, y: 300},
    {x: 320, y: 300},
    {x: 310, y: 300}
]
var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");


var dx = 10;
var dy = 10;
advanceSnake()
//360 310
var dx = 0;
var dy = -10;

advanceSnake()
drawSnake();
function advanceSnake() {
    var head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
    snake.pop();
    
}

function drawSnake() {
        // loop through the snake parts drawing each part on the canvas
snake.forEach(function drawSnakePart(snakePart) {

context.fillStyle = "blue";
context.fillRect(snakePart.x, snakePart.y, 10, 10);
context.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

)};



