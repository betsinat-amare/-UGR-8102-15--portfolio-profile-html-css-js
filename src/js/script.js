document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.add('active');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', function() {
        navbar.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    });
});
// for contact page
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input, textarea");
    const successMessage = document.createElement("div");
    const errorMessageContainer = document.createElement("div");
    
    successMessage.style.backgroundColor = "rgba(144, 238, 144, 0.3)";
    successMessage.style.color = "rgb(0, 128, 0)";
    successMessage.style.border = "2px solid rgb(0, 100, 0)";
    successMessage.style.padding = "10px";
    successMessage.style.marginTop = "10px";
    successMessage.style.display = "none";
    
    errorMessageContainer.style.color = "rgb(255, 0, 0)";
    errorMessageContainer.style.marginTop = "10px";
    
    form.appendChild(successMessage);
    form.appendChild(errorMessageContainer);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let valid = true;
        errorMessageContainer.textContent = "";
        
        inputs.forEach((input) => {
            if (!input.value.trim()) {
                valid = false;
                input.style.border = "2px solid rgb(255, 0, 0)";
                input.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
                errorMessageContainer.textContent += `${input.placeholder} is required.\n`;
            } else {
                if (input.type === "email" && !validateEmail(input.value)) {
                    valid = false;
                    input.style.border = "2px solid rgb(255, 0, 0)";
                    input.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
                    errorMessageContainer.textContent += `Invalid email format.\n`;
                } else {
                    input.style.border = "2px solid transparent";
                    input.style.backgroundColor = "transparent";
                }
            }
        });

        if (!valid) {
            errorMessageContainer.style.display = "block";
        } else {
            successMessage.textContent = "Form submitted successfully!";
            successMessage.style.display = "block";
            inputs.forEach((input) => input.value = "");
            errorMessageContainer.style.display = "none";
        }
    });

    inputs.forEach((input) => {
        input.addEventListener("focus", () => {
            input.style.border = "2px solid transparent";
            input.style.backgroundColor = "transparent";
        });
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});