const display = document.getElementById("display");
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;
        if (value === "C") {
            display.textContent = "";
        } 
        else if (value === "=") {
            try {
                const result = eval(display.textContent); 
                display.textContent = result;
            } catch {
                display.textContent = "Error";
            }
        }
        else {
            display.textContent += value;
        }
    });
});
