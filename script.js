const inputAngles = document.querySelectorAll('.input-class');
const isTriangleBtn = document.querySelector('#submit-btn');
const outputBox = document.querySelector('#output-box');

function calculateSumOfAngles(angle1, angle2, angle3) {
    return angle1 + angle2 + angle3;
}

function clickEventHandler() {
    (calculateSumOfAngles(Number(inputAngles[0].value), Number(inputAngles[1].value),
        Number(inputAngles[2].value)) === 180) ? outputBox.innerText = "Yay! It is a triangle.": outputBox.innerText = "No! It is a triangle!";
}

isTriangleBtn.addEventListener('click', clickEventHandler);