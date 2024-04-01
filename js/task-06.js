let validation_input = document.getElementById('validation-input');
let dataLengthValue = validation_input.getAttribute('data-length');
validation_input.addEventListener('blur', function(event) {
    let value = event.target.value;
  
     if(value.length != dataLengthValue){
        validation_input.classList.add('invalid');
        validation_input.classList.remove('valid');
     }else{
        validation_input.classList.add('valid');
        validation_input.classList.remove('invalid');
     }

  });