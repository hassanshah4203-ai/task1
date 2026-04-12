const form = document.getElementById('userForm');
const resultDisplay = document.getElementById('resultDisplay');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('nameInput').value.trim();
    const age = document.getElementById('ageInput').value.trim();
    const city = document.getElementById('cityInput').value.trim();
    const country = document.getElementById('countryInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();

    resultDisplay.style.display = 'block';
    resultDisplay.innerHTML = `
        <strong>Hello, ${name || 'Guest'}!</strong><br>
        Age: ${age || '—'}<br>
        City: ${city || '—'}<br>
        Country: ${country || '—'}<br>
        Email: ${email || '—'}
    `;
});
