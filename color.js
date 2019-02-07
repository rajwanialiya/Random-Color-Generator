
let button = document.getElementById('color-button');
let mysteryButton = document.getElementById('next-button');

// Random number function will creates color codes for the randomColor variable
function rgb(num) {
  return Math.floor(Math.random() * num);
}

let colorChange = function() {
  let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
  event.target.style.backgroundColor = randomColor;
}
button.onclick = colorChange;
mysteryButton.onwheel = colorChange;