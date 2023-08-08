import './style.css';
import { clearContent, selectButton } from './helpers';
import generateHomePage from './home';
import generateMenuPage from './menu';

// Get Content Div
const contentContainer = document.getElementById('content')

// Create containers
const navContainer = document.createElement('div');
navContainer.classList.add('nav');
contentContainer.appendChild(navContainer);

const Container = document.createElement('div');
Container.classList.add('container');
contentContainer.appendChild(Container);

//// Create Navigation

// Header Container
const headerContainer = document.createElement('div');
headerContainer.classList.add('header');

const title = document.createElement('p');
title.textContent = "Burgeria";

// Create SVG element
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("class", "logo");
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg.setAttribute("viewBox", "0 0 24 24");

// Create title element
const svgTitle = document.createElementNS("http://www.w3.org/2000/svg", "title");
title.classList.add('title');
title.textContent = "Burgeria";

// Create path element
const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("d", "M22 13C22 14.11 21.11 15 20 15H4C2.9 15 2 14.11 2 13S2.9 11 4 11H13L15.5 13L18 11H20C21.11 11 22 11.9 22 13M12 3C3 3 3 9 3 9H21C21 9 21 3 12 3M3 18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18V17H3V18Z");

// Append title and path to SVG element
svg.appendChild(svgTitle);
svg.appendChild(path);

// Append title (restaurant name) and SVG
headerContainer.appendChild(svg);
headerContainer.appendChild(title);

// Append Header to navContainer
navContainer.appendChild(headerContainer);

// Create Options
const btnsContainer = document.createElement('ul');
btnsContainer.classList.add('btns-container');

const homeBtn = document.createElement('li');
homeBtn.textContent = "Home";
homeBtn.classList.add('btn');

// Initialize with Home Page
generateHomePage(Container);
homeBtn.classList.add('selected');

const menuBtn = document.createElement('li');
menuBtn.textContent = "Menu";
menuBtn.classList.add('btn');

const aboutUsBtn = document.createElement('li');
aboutUsBtn.textContent = "About Us";
aboutUsBtn.classList.add('btn');


// Add Event Listeners
homeBtn.addEventListener('click', () => {
    clearContent(Container);
    generateHomePage(Container);
});

menuBtn.addEventListener('click', () => {
    clearContent(Container);
    generateMenuPage(5, Container);
});

aboutUsBtn.addEventListener('click', () => {
    console.log("hi");
});

btnsContainer.appendChild(homeBtn);
btnsContainer.appendChild(menuBtn);
btnsContainer.appendChild(aboutUsBtn);

// Append Options to navContainer
navContainer.appendChild(btnsContainer);

// Get All Buttons
const buttons = document.querySelectorAll('.btn');

// Convert NodeList to an array using the spread operator
const buttonsArray = [...buttons];

// Add a click event listener to each button
buttonsArray.forEach(button => {
    button.addEventListener('click', function() {
        // Your event handling logic here
        selectButton(this, buttonsArray);
    });
});

// Create Footer
const footerContainer = document.createElement('div');
const footer = document.createElement('p');
footer.textContent = "this is the footer. lorem ipsum this is made by me."

// Append Footer to navContainer
footerContainer.appendChild(footer);
navContainer.appendChild(footer);