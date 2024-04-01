const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


let ingredientsList = document.getElementById('ingredients');

for(let ingredient of ingredients){
  ingredientsList.appendChild(document.createElement('li')).textContent = ingredient;
}