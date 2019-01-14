
var snake = [
    {x: 350, y: 300},
    {x: 340, y: 300},
    {x: 330, y: 300},
    {x: 320, y: 300},
    {x: 310, y: 300}
]
var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");

/* var dx = 10;
var dy = -10;
moveSnake() */
//360 310
var dx = 0;
var dy = 10;

moveSnake()

drawSnake();
var head
function moveSnake() {
    head = {x: snake[0].x + dx, y: snake[0].y + dy};
    //We add new head
    snake.unshift(head);
    //We remove the last index so we still have five
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
function clearCanvas() {
    context.fillStyle = "black";
    
    context.fillRect(0,  0, 600, 600);
    context.strokeRect(0, 0, 600, 600);
}
 
var intevalMove = setInterval(timerSnake, 1000)
function timerSnake(){
    clearCanvas()
    moveSnake()
    drawSnake()

}




