        const inputElement = document.getElementById('userInput');
        const outputElement = document.getElementById('output');

        inputElement.addEventListener('keyup', function() {
            outputElement.textContent = inputElement.value;
        });