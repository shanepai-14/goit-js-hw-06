
let inputElement = document.getElementById('name-input')
let output = document.getElementById('name-output');

inputElement.addEventListener('input', function(event) {
    output.textContent= event.target.value;
  });