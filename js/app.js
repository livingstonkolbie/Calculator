
let zero = document.querySelector(".zero");
zero.addEventListener('click', () => {
    let calcText = document.querySelector(".calcText");
    calcText.innerHTML = "0";
});

let numButtons = document.querySelectorAll(".numCol");
console.log(numButtons);

let operatorButtons = document.querySelectorAll(".oppCol");
console.log(operatorButtons);


//BELOW - scroll throught the numbers and make it so that when you click them they display on the screen
for (let i = 0; i < numButtons.length; i++) {
    function numToDisplay() {
        numButtons[i].innerHTML = i;
    }
}
