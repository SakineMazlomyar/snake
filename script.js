var pos = 0;
var picture;
var div
var toRightMovment;

function init(){
   createSnakeForm()
}
function createSnakeForm(){
    div = document.createElement("div");
    div.classList.add("div")
    //create the pictures
    for(var i = 0; i<5; i++){
        picture = document.createElement("img");
        picture.classList.add("img")
        picture.src = "greenSquare.png";
        div.appendChild(picture);
    }
    document.body.appendChild(div)

    //Move the pictures
 
    toRightMovment = setInterval(moveToRight, 300)

}
function directions(){
    var button = document.createElement("button");
    button.innerText = "arrow right"
    button.onkeydown = function(key){
        key = key || window.event;
        if(e.onkeydown == "37"){
            div.style.transform = "scaleX(1)";
        }else if(e.onkeydown == "39"){
            div.style.transform = "scaleX(-1)";
        }
    }
}

function moveToRight(){
    if (pos == 350) {
        alert("Failed ;(")
        clearInterval(toRightMovment);
        toLeftMovment = setInterval(moveToLeft, 300)
    } else {
        pos+=5; 
        var speed = 0.5
        div.style.left = pos * 0.5 + 'px' ; 
        directions()
        
    }
}
function moveToLeft(){
    if (pos == 0) {
        alert("Failed ;(")
        clearInterval(toLefttMovment);
    } else {
        pos-=5; 
        var speed = 0.5
        div.style.right = pos * 0.5 + 'px' ; 
        directions()
        
    }
}