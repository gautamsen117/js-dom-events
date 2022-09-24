// Option: 1 directly set in the HTML element
// <button onclick="console.log(7)">Click Me</button>
// option: 2 onclick function on the html Element
// <button onclick="makeRed()">Make Red</button>
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
// Option: 4
const purpleButton = document.getElementById('make-purple');
purpleButton.addEventListener('click', makePurple);
function makePurple() {
    document.body.style.backgroundColor = 'purple';
}
// Option: 4 another
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', function makePink() {
    document.body.style.backgroundColor = 'pink';
});

// Option Final
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'; 
})