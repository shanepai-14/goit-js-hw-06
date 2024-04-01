function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
var bodyElement = document.body;
let bg_button = document.getElementsByClassName('change-color')[0];
let color_display = document.getElementsByClassName('color')[0];
bg_button.addEventListener('click', function() {
   let new_body_color = getRandomHexColor();
  bodyElement.style.backgroundColor = new_body_color ;
  color_display.textContent = new_body_color;
 });