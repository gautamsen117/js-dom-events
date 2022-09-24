// Option: 1 directly set in the HTML element
// option: 2 onclick function
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// Option: 3
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.onclick = makeGreen;
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}
// Option: 3 Another
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue';
};