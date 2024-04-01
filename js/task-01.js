

let categoriesUl = document.getElementById('categories');



let categories = categoriesUl.querySelectorAll('li.item');
categories.forEach(function(category) {

    var categoryName = category.querySelector('h2').textContent;

    var elementsCount = category.querySelectorAll('ul li').length;

    console.log("Category: " + categoryName);
    console.log("Elements: " + elementsCount);
});

