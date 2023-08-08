// Remove all parent's child
const clearContent = (parentNode) => {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}

// Highlight selected button
const selectButton = (clickedBtn, buttons) => {
    clickedBtn.classList.add('selected');
    buttons.forEach(btn => {
        if(btn === clickedBtn) return;
        if(btn.classList.contains('selected')){
            btn.classList.remove('selected');
        }
    });
}

// Load all image files from the 'images/menu' folder
const imageContext = require.context('./images/menu', false, /\.(png|jpe?g|gif|svg)$/);

// Create an array of image URLs
const menuImages = imageContext.keys().map(imageContext);

export {
    clearContent,
    selectButton,
    menuImages,
}