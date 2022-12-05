const sidesOfTriangle = document.querySelectorAll('.sides');
const submitBtn = document.querySelector('#submit-btn');
const outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click', getHypotenuse);


function calculateSquare() {

    let squaresOfBothSides = 0;

    for (let i = 0; i < sidesOfTriangle.length; i++) {
        squaresOfBothSides += Math.pow((Number(sidesOfTriangle[i].value)), 2)

    }
    return squaresOfBothSides;
}


function getHypotenuse() {

    outputBox.innerText = `Hypotenuse is: ${Math.sqrt(calculateSquare())}`
}