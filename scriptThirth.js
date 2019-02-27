function init() {
    ss()
}
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
var directionX = 0;
var directionY = 10;

moveSnake()

drawSnake();
var head
function moveSnake() {
    head = {x: snake[0].x + directionX, y: snake[0].y + directionY};
    //We add new head
    snake.unshift(head);
    //We remove the last index so we still have five
    if(snake[0].x == foodX && snake[0].y == foodY) {
        
        
    } else {
        snake.pop()
    }
}


    


function drawSnake() {
    // loop through the snake parts drawing each part on the canvas
    snake.forEach(drawSnakePart)
};

function drawSnakePart(snakePart) {
    context.fillStyle = "blue";
    context.fillRect(snakePart.x, snakePart.y, 10, 10);
    context.strokeRect(snakePart.x, snakePart.y, 10, 10);
}
function clearCanvas() {
    context.fillStyle = "black";
    
    context.fillRect(0,  0, 600, 600);
    context.strokeRect(0, 0, 600, 600);
}
function ss() {
    setTimeout(function(){
        clearCanvas()
        drawFood()
        moveSnake()
        drawSnake()
        
        ss()
    },200);

}



(function directions(){
    document.onkeydown = function(key){
        if (key.keyCode == '38') {
            directionX= 0
            directionY = -10;
        
            // up arrow
        }
        else if (key.keyCode == '40') {
            directionX = 0
            directionY = 10;
            
            // down arrow
        }
        else if (key.keyCode == '37') {
            directionX = -10
            directionY= 0;
           // left arrow
        }
        else if (key.keyCode == '39') {
            directionX = 10
            directionY = 0;
          
           // right arrow
        }
    }  
})();


function calculateRandomXandY(minimum, maximum) {
    return Math.round((Math.random() * (maximum-minimum)-minimum) / 10) * 10;

}

var foodX = calculateRandomXandY(0, 600 - 10);
var foodY = calculateRandomXandY(0, 600 - 10);
function createFood() {
    snake.forEach(function isFoodOnSnake(part) {
        if(part.x == foodX && part.y == foodY) {
            createFood()
    
        }
        
  })
}

function drawFood() {
    context.fillStyle = 'green';
    context.fillRect(foodX, foodY, 10, 10);
    context.strokeRect(foodX, foodY, 10, 10);
}


