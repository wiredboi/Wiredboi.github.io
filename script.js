const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}

function redirectToWebsite(url) {
    window.open(url, "_blank");
}

function changeText() {
    var randomIndex = Math.floor(Math.random() * texts.length); // Get a random index
    var randomText = texts[randomIndex]; // Get the text at the random index
    document.getElementById("dynamicText").textContent = randomText; // Set the text content
}

window.onload = function() {
    changeText(); // Call the function when the page is loaded or refreshed
};


