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
    var randomIndex = Math.floor(Math.random() * texts.length);
    var randomText = texts[randomIndex];
    document.getElementById("dynamicText").textContent = randomText;
}

document.addEventListener("DOMContentLoaded", function() {
    changeText(); // Call the function when the DOM content is loaded
});

}