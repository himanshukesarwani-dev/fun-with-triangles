const quizForm = document.querySelector('#quiz-form');
const submitBtn = document.querySelector('#submit-btn');
const outputBox = document.querySelector('#output-box');


// console.log(quizForm, submitBtn, outputBox)

const correctAnswers = ["Right Angled", "Equilateral", "180°", "Hypotenuse", "Similar", "15 cm", "4 cm^2", "5 cm, 8 cm, 15 cm", "7/2", "Equal"]

function calculateUserScore() {
    let score = 0;
    let i = 0;

    const formResults = new FormData(quizForm);
    for (let entry of formResults.values()) {
        if (entry === correctAnswers[i]) {
            score++;

        } else {
            score--;
        }
        i++;
    }
    outputBox.innerText = `Your score is ${score}`;



}


submitBtn.addEventListener('click', calculateUserScore)