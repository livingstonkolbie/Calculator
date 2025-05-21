

let numButtons = document.querySelectorAll(".num");
let oppButtons = document.querySelectorAll(".opp");


for (let i = 0; i < numButtons.length; i++) {

    function numToDisplay() {
        let chooseNumber = document.querySelectorAll(".num");
        chooseNumber[i].addEventListener('click', () => {
            let calcText = document.querySelector(".calcText");
            calcText.innerHTML = chooseNumber[i].innerHTML;
        });
    }

    function oppToDisplay() {
        let chooseOpp = document.querySelectorAll(".opp");
        chooseOpp[i].addEventListener('click', () => {
            let calcText = document.querySelector(".calcText");
            calcText.innerHTML = chooseOpp[i].innerHTML;
        })
    }


    oppToDisplay();
    numToDisplay();
}
