// Generates and returns a random RGB color string.
function random_color() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

// Retrieve button elements by their IDs.
const green = document.getElementById("green");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const random = document.getElementById("random");

// Reference to the document body for background updates.
const body = document.getElementsByTagName("body")[0];

// Apply a fixed red background color.
red.addEventListener("click", () => {
    body.style.backgroundColor = "rgba(244, 46, 69, 1)";
});

// Apply a fixed green background color.
green.addEventListener("click", () => {
    body.style.backgroundColor = "rgba(63, 239, 43, 1)";
});

// Apply a fixed blue background color.
blue.addEventListener("click", () => {
    body.style.backgroundColor = "#387be8ff";
});

// Apply a randomly generated background color.
random.addEventListener("click", () => {
    body.style.backgroundColor = random_color();
});
