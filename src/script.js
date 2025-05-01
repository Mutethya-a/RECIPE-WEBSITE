document.addEventListener("DOMContentLoaded", function () {
    const recipeForm = document.getElementById('recipeForm');

    // Handle form submission
    recipeForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload

        const recipeName = document.getElementById('recipeName').value;
        const ingredients = document.getElementById('ingredients').value;
        const instructions = document.getElementById('instructions').value;

        // Basic validation
        if (recipeName && ingredients && instructions) {
            // Normally you'd submit the form data to a server here (e.g., via an AJAX request)
            alert('Recipe submitted successfully!');
            recipeForm.reset(); // Reset the form after submission
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
