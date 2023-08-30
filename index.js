var drums = document.querySelectorAll(".drum");

// for click
for (var index = 0; index < drums.length; index++) {

    drums[index].addEventListener("click", function () {
        sound(this.textContent); // 'this' is the button here
        animation(this.textContent);
    })
}

// for keypress
document.addEventListener("keydown", function (event) {
    sound(event.key);
    animation(event.key);
})

// code for sound
function sound(key) {
    switch (key) {
        case "w":
            var audio1 = new Audio("sounds/crash.mp3");
            audio1.play();
            break;
        case "a":
            var audio1 = new Audio("sounds/kick-bass.mp3");
            audio1.play();
            break;
        case "s":
            var audio1 = new Audio("sounds/snare.mp3");
            audio1.play();
            break;
        case "d":
            var audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
        case "j":
            var audio1 = new Audio("sounds/tom-2.mp3");
            audio1.play();
            break;
        case "k":
            var audio1 = new Audio("sounds/tom-3.mp3");
            audio1.play();
            break;
        case "l":
            var audio1 = new Audio("sounds/tom-4.mp3");
            audio1.play();
            break;

        default:
            break;
    }
}

function animation(key) {
    // we have to add that css class to the button of the pressed key. First we need to find out the button, i.e. querySelector
    var activeButton = document.querySelector("." + key); //classSelector
    activeButton.classList.add("pressed");
    // timeout function. Thiss calls a function after a number of milliseconds
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

