const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 900;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}

function redirectToWebsite(url) {
    window.open(url, "_blank");
}


