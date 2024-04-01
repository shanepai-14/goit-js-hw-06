

let value = document.getElementById('value');
let counterValue = 0;


function decrement(){
    
    counterValue--;
    value.textContent = counterValue;
}

function increment(){
    counterValue++;
    value.textContent = counterValue;
}

let increment_button = document.querySelector('[data-action="increment"]');
let decrement_button = document.querySelector('[data-action="decrement"]');
// Add a click event listener to the element
increment_button.addEventListener('click', function() {
 increment();
});
decrement_button.addEventListener('click', function() {
    decrement();
   });