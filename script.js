let pixelBoardVariable = document.querySelector('#pixel-board');
let paletteColorVariable = document.querySelector('#color-palette');
let boardCleaner = document.querySelector('#clear-board');
let colorSelected; 
let selected;

function paletteCreator() {
  for (let i = 0; i < 4; i += 1) {
    let pixelCreator = document.createElement('div');
    pixelCreator.className = 'color';
    pixelCreator.style.display = 'inline-block';
    pixelCreator.style.border = '1px solid black';
    paletteColorVariable.appendChild(pixelCreator); 
  }
}

function paletteColorSetter() { 
  document.querySelectorAll('.color')[0].style.backgroundColor = 'black';
  document.querySelectorAll('.color')[1].style.backgroundColor = 'red';
  document.querySelectorAll('.color')[2].style.backgroundColor = 'green';
  document.querySelectorAll('.color')[3].style.backgroundColor = 'blue';
}

function colorSetter(ini) {
  if (ini === 'undefined') {
    selected = document.querySelector('.color');
    selected.classList.add('selected');
    colorSelected = selected.style.backgroundColor;
  } else if (ini.target.classList.contains('color')) {
    selected.classList.remove('selected');
    ini.target.classList.add('selected');
    selected = ini.target;
    colorSelected = selected.style.backgroundColor; 
  }
}
document.addEventListener('click', colorSetter);

for (let index = 0; index < 25; index += 1) {
  let createPixel = document.createElement('div');
  createPixel.className = 'pixel';
  pixelBoardVariable.appendChild(createPixel); 
}

function painter(ini) {
  let targetElement = ini.target;
  if (ini.target.classList.contains('pixel')) {
    targetElement.style.backgroundColor = colorSelected;
  }
}
document.addEventListener('click', painter);

function pixelCleaner() {
  let pixel = document.querySelectorAll('.pixel');
  for (let j = 0; j < pixel.length; j += 1) {
    pixel[j].style.backgroundColor = 'white';
  }
}
boardCleaner.addEventListener('click', pixelCleaner);

window.onload = function load() {
  paletteCreator();
  paletteColorSetter();
  colorSetter('undefined');
};