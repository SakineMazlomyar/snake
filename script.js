function init(){
   createSnakeForm()
}
function createSnakeForm(){
    var snake = [1,2,3,4,5];
    
    
    var div = document.createElement("div");
    div.classList.add("div")
    
    for(var i = 0; i<snake.length; i++){
        //The pictures
        var picture = document.createElement("img");
        picture.classList.add("img")
        picture.src = "greenSquare.png";

 
        div.appendChild(picture);
    }
    document.body.appendChild(div)
}
