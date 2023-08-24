console.log("Script loaded"); // Check if the script is loaded

const clearButton = document.getElementById("clearButton");
const userInput = document.getElementById("user-input");

clearButton.addEventListener("click", function () {
    console.log("Clear button clicked"); // Check if the event listener works
    userInput.value = ""; // Clear the input field
});

document.addEventListener("keydown", function (event) {
    console.log("Key pressed:", event.key); // Check if the keydown event is triggered
    if (event.key === "6") {
        userInput.value = ""; // Clear the input field
    }
});