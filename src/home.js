const generateHomePage = (container) => {
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');

    const tagLine = document.createElement('p');
    tagLine.classList.add('tagline');
    tagLine.textContent = "Lorem Ipsum!";

    const paragraph = document.createElement('p');
    paragraph.classList.add('small');
    paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas accumsan lacus vel facilisis volutpat. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. A scelerisque purus semper eget duis at. A diam maecenas sed enim ut sem viverra. Eget sit amet tellus cras adipiscing enim eu turpis. Donec pretium vulputate sapien nec sagittis."

    const placeholderBtn = document.createElement('div');
    placeholderBtn.classList.add('btn-2');
    placeholderBtn.textContent = "Order Now!";

    // Append contents to homeContainer
    homeContainer.appendChild(tagLine);
    homeContainer.appendChild(paragraph);
    homeContainer.appendChild(placeholderBtn);

    // Append to container parameter
    container.appendChild(homeContainer);

}

export default generateHomePage;