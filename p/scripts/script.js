function addMeal() {
    const mealName = document.getElementById('meal-name').value;
    const ingredients = document.getElementById('ingredients').value;
    const mealDay = document.getElementById('meal-day').value;

    if (mealName && ingredients && mealDay) {
        const mealList = document.getElementById('meal-list');
        const mealItem = document.createElement('li');
        mealItem.textContent = `${mealDay}: ${mealName} (${ingredients})`;
        mealList.appendChild(mealItem);

        // Clear the form inputs
        document.getElementById('meal-name').value = '';
        document.getElementById('ingredients').value = '';
        document.getElementById('meal-day').value = 'Monday';
    }
}

function updateGroceryList() {
    const existingIngredients = document.getElementById('existing-ingredients').value;

    if (existingIngredients) {
        const groceryList = document.getElementById('grocery-list-items');
        const groceryItem = document.createElement('li');
        groceryItem.textContent = existingIngredients;
        groceryList.appendChild(groceryItem);

        // Clear the input
        document.getElementById('existing-ingredients').value = '';
    }
}

function addExpiration() {
    const ingredient = document.getElementById('exp-ingredient').value;
    const expirationDate = document.getElementById('expiration-date').value;

    if (ingredient && expirationDate) {
        const expirationList = document.getElementById('expiration-list');
        const expirationItem = document.createElement('li');
        expirationItem.textContent = `${ingredient}: ${expirationDate}`;
        expirationList.appendChild(expirationItem);

        // Clear the form inputs
        document.getElementById('exp-ingredient').value = '';
        document.getElementById('expiration-date').value = '';
    }
}

function askAI() {
    const userInput = document.getElementById('user-input').value;
    const aiResponse = document.getElementById('ai-response');

    if (userInput) {
        aiResponse.textContent = `You asked: ${userInput}. Here's what I suggest...`;
        // Add your AI logic here

        // Clear the input
        document.getElementById('user-input').value = '';
    }
}
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});
// script.js file

function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {

    // If found you qr code
    function onScanSuccess(decodeText, decodeResult) {
        alert("You Qr is : " + decodeText, decodeResult);
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );
    htmlscanner.render(onScanSuccess);
});
