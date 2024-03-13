const input = document.getElementById("text");
        const addButton = document.getElementById("button");
        const output = document.getElementById('output');

        input.addEventListener('keyup', backgroundColor);
        addButton.addEventListener('click', addItem);

        function backgroundColor() {
            if (input.value.trim() === '') {
                input.style.backgroundColor = 'yellow';
            } else {
                input.style.backgroundColor = 'white';
            }
        }

        function addItem() {
            const inputValue = input.value.trim();

            if (inputValue !== '') {
                const newItem = document.createElement('p');
                newItem.textContent = inputValue;
                output.appendChild(newItem);
                input.value = '';
                input.style.backgroundColor = 'yellow';
            }
        }
    
        