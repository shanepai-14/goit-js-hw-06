
const form = document.querySelector('.login-form');


form.addEventListener('submit', function(event) {
 
  event.preventDefault();


  const emailInput = form.elements['email'];
  const passwordInput = form.elements['password'];

  if (!emailInput.value || !passwordInput.value) {
    alert('All fields must be filled in.');
    return;
  }

  const formData = {
    email: emailInput.value,
    password: passwordInput.value
  };


  console.log(formData);

 
  form.reset();
});