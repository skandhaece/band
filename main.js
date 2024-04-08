
// document.querySelector(".w").addEventListener("click",toDo);
buttonsInDoc = document.querySelectorAll(".key");
for(var i=0;i<buttonsInDoc.length;i++)
{
    buttonsInDoc[i].addEventListener("click", toDo);
}
function toDo(){
    
    var buttonPressed = this.innerHTML;
    soundPlay(buttonPressed);   

}


function soundPlay(buttonPressed){
    switch(buttonPressed){
        case "w": var audio = new Audio("./sounds/tom-1.mp3");audio.play();buttonAnimation(buttonPressed);
            break;
        case "a": var audio = new Audio("./sounds/tom-2.mp3");audio.play();buttonAnimation(buttonPressed);
            break;
        case "s": var audio = new Audio("./sounds/tom-3.mp3");audio.play();buttonAnimation(buttonPressed);
            break;
        case "d": var audio = new Audio("./sounds/tom-4.mp3");audio.play();buttonAnimation(buttonPressed);
            break;       
        case "j": var audio = new Audio("./sounds/snare.mp3");audio.play();buttonAnimation(buttonPressed);
            break;
        case "k":var audio = new Audio("./sounds/kick-bass.mp3");audio.play();buttonAnimation(buttonPressed);
            break;
        case "l":var audio = new Audio("./sounds/crash.mp3");audio.play();buttonAnimation(buttonPressed);
            break;
        default:console.log(buttonPressed)
   
     }
}

document.addEventListener("keydown",function (keyboard){
    soundPlay(keyboard.key);
    
});

function buttonAnimation(currentKey){

    document.querySelector("."+currentKey).classList.add("clickedButton")
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("clickedButton")
    },100);
    
}