
let element_count = document.getElementById('element_count');
let boxes = document.getElementById('boxes');
let DataCreate = document.querySelector('[data-create]');
let DataDestroy = document.querySelector('[data-destroy]');

DataCreate.addEventListener('click', function() {
  createBoxes(element_count.value);
});

DataDestroy.addEventListener('click', function() {
  destroyBoxes();

});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount){
  for (var i = 0; i < amount; i++) {
  let new_box_color = getRandomHexColor();
  var new_box = document.createElement('div');
  new_box.classList.add('box');
  boxes.insertAdjacentElement('beforeend', new_box);
  new_box.style.backgroundColor = new_box_color;
}
}

function destroyBoxes(){
  document.getElementById('boxes').innerHTML = '';
}