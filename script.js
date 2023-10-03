const flashing = (id) => {
    let theFlashingBox = document.getElementById(id);
    let flashingOnButton = document.getElementById("button_" + id);
    let flashingOn = true;

    setInterval(function() {
        if (flashingOn) {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            theFlashingBox.style.backgroundColor = "#" + randomColor;
        }
    }, 400);

    flashingOnButton.addEventListener("click", function() {
        console.log("clicked");
        flashingOn = !flashingOn;
    });
}



flashing("one")
flashing("two")
flashing("three")
flashing("four") 
