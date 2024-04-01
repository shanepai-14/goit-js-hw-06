let inputElement = document.getElementById('font-size-control')
let text = document.getElementById('text');

inputElement.addEventListener('input', function(event) {
 
      let value =  event.target.value;
    text.style.fontSize =  `${value}px`;
  });   