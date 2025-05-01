document.getElementById('recipe-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const recipeTitle = document.getElementById('recipe-title').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    console.log('Recipe Title:', recipeTitle);
    console.log('Ingredients:', ingredients);
    console.log('Instructions:', instructions);

    document.getElementById('recipe-form').reset();

    alert('Recipe submitted successfully!');
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
