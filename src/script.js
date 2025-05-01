function createRecipeCard(title, ingredients, instructions) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Ingredients:</strong></p>
        <p>${ingredients}</p>
        <p><strong>Steps:</strong></p>
        <p>${instructions}</p>
    `;
    document.querySelector('.recipes-container')?.appendChild(card);
}

function loadRecipes() {
    const recipes = JSON.parse(localStorage.getItem('userRecipes')) || [];
    recipes.forEach(recipe => {
        createRecipeCard(recipe.title, recipe.ingredients, recipe.instructions);
    });
}

function handleRecipeForm() {
    const form = document.getElementById('recipe-form');
    form?.addEventListener('submit', function (e) {
        e.preventDefault();
        const title = document.getElementById('recipe-title').value;
        const ingredients = document.getElementById('ingredients').value;
        const instructions = document.getElementById('instructions').value;
        const newRecipe = { title, ingredients, instructions };
        const existing = JSON.parse(localStorage.getItem('userRecipes')) || [];
        existing.push(newRecipe);
        localStorage.setItem('userRecipes', JSON.stringify(existing));
        createRecipeCard(title, ingredients, instructions);
        form.reset();
    });
}

function handleContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        const submission = { name, email, subject, message };
        const existing = JSON.parse(localStorage.getItem('contactMessages')) || [];
        existing.push(submission);
        localStorage.setItem('contactMessages', JSON.stringify(existing));

        form.reset();
        alert('Message submitted successfully!');
        loadContactMessages();
    });
}

function loadContactMessages() {
    const container = document.getElementById('message-list');
    if (!container) return;

    const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    container.innerHTML = '';

    messages.forEach(msg => {
        const item = document.createElement('div');
        item.className = 'message-entry';
        item.innerHTML = `
            <p><strong>${msg.name}</strong> (${msg.email})</p>
            <p><em>${msg.subject}</em></p>
            <p>${msg.message}</p>
            <hr />
        `;
        container.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadRecipes();
    handleRecipeForm();
    handleContactForm();
    loadContactMessages();
});
