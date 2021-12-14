var num = document.querySelectorAll(".tambor").length;

for(var i=0; i<num;i++){

document.querySelectorAll(".tambor")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    makeAnimation(buttonInnerHTML);
    
});
}
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    makeAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "A":
            var tambor = new Audio("Audio/Clap.wav");
            tambor.play();
            break;
        case "S": 
             var tambor = new Audio("Audio/Hihat.wav");
             tambor.play();
             break;
        case "D": 
             var tambor = new Audio("Audio/Kick.wav");
             tambor.play();
        break;
        case "F": 
             var tambor = new Audio("Audio/Openhat.wav");
             tambor.play();
        break;
        case "G": 
             var tambor = new Audio("Audio/Boom.wav");
            tambor.play();
            break;
         case "H": 
             var tambor = new Audio("Audio/Ride.wav");
            tambor.play();
            break;  
    
        case "J":
            var tambor = new Audio("Audio/Snare.wav");
            tambor.play();
        break;

        case "K": 
        var tambor = new Audio("Audio/Tom.wav");
        tambor.play();
        break;

        case "L": 
        var tambor = new Audio("Audio/boom")
        break;
        default: console.log(buttonInnerHTMl);
    }
}
function makeAnimation(currentKey){
     var activeButton = document.querySelector("."+currentKey);
     activeButton.classList.add("pressed");
     setTimeout(function(){
        activeButton.classList.remove("pressed");
     }, 100 );
}