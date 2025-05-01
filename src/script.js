document.addEventListener("DOMContentLoaded", function () {
    const recipeForm = document.getElementById('recipeForm');
    recipeForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const recipeName = document.getElementById('recipeName').value;
        const ingredients = document.getElementById('ingredients').value;
        const instructions = document.getElementById('instructions').value;

        if (recipeName && ingredients && instructions) {
            alert('Recipe submitted successfully!');
            recipeForm.reset();
        } else {
            alert('Please fill in all fields before submitting.');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (name && email && subject && message) {
            alert('Message sent successfully!');
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});
