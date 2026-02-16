document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll('#username, #email, #password');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.backgroundColor = '#fffae0';
        });
        input.addEventListener('blur', () => {
            input.style.backgroundColor = 'white';
        });
    });

    const form = document.getElementById('signup-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;

        const username = document.getElementById('username');
        if (username.value.trim() === "") {
            showError(username, 'error-username', 'Username is required');
            isValid = false;
        } else {
            clearError(username, 'error-username');
        }

        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            showError(email, 'error-email', 'Enter a valid email address');
            isValid = false;
        } else {
            clearError(email, 'error-email');
        }

        const password = document.getElementById('password');
        if (password.value.length < 8) {
            showError(password, 'error-password', 'Password must be at least 8 characters');
            isValid = false;
        } else {
            clearError(password, 'error-password');
        }

        const terms = document.getElementById('terms');
        if (!terms.checked) {
            showError(terms, 'error-terms', 'You must accept the terms');
            isValid = false;
        } else {
            clearError(terms, 'error-terms');
        }

        if (isValid) {
            alert("Registration successful!");
        }
    });

    function showError(element, spanId, message) {
        const errorSpan = document.getElementById(spanId);
        errorSpan.textContent = message;
        errorSpan.style.display = 'block';
        element.classList.add('error-border');
    }

    function clearError(element, spanId) {
        const errorSpan = document.getElementById(spanId);
        errorSpan.textContent = '';
        errorSpan.style.display = 'none';
        element.classList.remove('error-border');
    }

    const tiles = document.querySelectorAll('.thumb');
    const caption = document.getElementById('image-caption');

    function selectTile(selectedTile) {
        tiles.forEach(tile => tile.classList.remove('expanded'));
        
        selectedTile.classList.add('expanded');
        
        const cityName = selectedTile.getAttribute('data-city');
        caption.textContent = `You selected: ${cityName}`;
    }

    tiles.forEach(tile => {
        tile.addEventListener('click', () => selectTile(tile));

        tile.addEventListener('keydown', (event) => {
            if (event.key === "Enter") {
                selectTile(tile);
            }
        });
    });
});