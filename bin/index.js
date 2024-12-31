 // Check for the "duckist" parameter in the URL
        const urlParams = new URLSearchParams(window.location.search);
        const isUnlimitedMode = urlParams.has('duckist');

        // Helper to generate a random digit
        function generateRandomDigit() {
            return Math.floor(Math.random() * 10); // 0-9
        }

        // Generate the code
        function generateCode() {
            const prefix = "00";
            const numbers = Array.from({ length: 7 }, generateRandomDigit).join(''); // 7 random digits
            const firstDigit = Math.floor(Math.random() * 9) + 1; // Random digit 1-9
            const lastDigit = Math.floor(Math.random() * 9) + 1; // Random digit 1-9
            const secondPart = `0${firstDigit}0${lastDigit}`; // Format 0X0Y
            const code = `${prefix}${numbers}-${secondPart}`;

            // Save the code to localStorage
            localStorage.setItem('lastGeneratedCode', code);

            // Check the limit if not in unlimited mode
            if (!isUnlimitedMode) {
                const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
                let usageData = JSON.parse(localStorage.getItem('codeUsage')) || {};

                if (usageData.date !== today) {
                    usageData = { date: today, count: 0 }; // Reset if a new day
                }

                // Check if the user has reached the limit
                if (usageData.count >= 5) {
                    document.getElementById('limit-message').classList.remove('hidden');
                    return;
                }

                // Update the usage count
                usageData.count++;
                localStorage.setItem('codeUsage', JSON.stringify(usageData));

                // Update the limit message
                document.getElementById('limit-count').textContent = 5 - usageData.count;
            }

            // Display the new code
            document.getElementById('generated-code').textContent = code;
            document.getElementById('code-container').classList.remove('hidden');
            document.getElementById('limit-message').classList.add('hidden');
        }

        // Copy the code to clipboard
        function copyToClipboard() {
            const code = document.getElementById('generated-code').textContent;
            navigator.clipboard.writeText(code).then(() => {
                showAlert("Code copied to clipboard!");
            }).catch(err => {
                console.error("Failed to copy code:", err);
            });
        }

        // Display the alert inside the card
        function showAlert(message) {
            const alert = document.getElementById('alert');
            alert.classList.remove('hidden');
            setTimeout(() => {
                alert.classList.add('hidden');
            }, 3000);
        }

        // Close the alert
        function closeAlert() {
            const alert = document.getElementById('alert');
            alert.classList.add('hidden');
        }

        // Initialize: Show unlimited mode message if active
        if (isUnlimitedMode) {
            document.getElementById('limit-message-container').innerHTML = "Unlimited Codes remaining.";
            document.getElementById('limit-message').classList.add('hidden'); // Hide limit message for unlimited users
        }

        // Display the last generated code on page load
        window.onload = function() {
            const lastCode = localStorage.getItem('lastGeneratedCode');
            if (lastCode) {
                document.getElementById('generated-code').textContent = lastCode;
                document.getElementById('code-container').classList.remove('hidden');
            }
        };
