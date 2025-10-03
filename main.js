const button = document.getElementById('colorChangeButton');
const colors = ['#ff6347', '#6a5acd', '#3cb371', '#ffa500', '#4682b4']; // Array of colors
let currentColorIndex = 0;

button.addEventListener('click', () => {
    // Change the background color of the body
    document.body.style.backgroundColor = colors[currentColorIndex];
    button.style.backgroundColor = colors[currentColorIndex];
    // Move to the next color in the array, or loop back to the beginning
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});
