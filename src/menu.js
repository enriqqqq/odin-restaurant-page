import { menuImages } from "./helpers";
import noImg from "./images/no-image.jpg"

const generateMenuPage = (itemAmount, container) => {
   const menuGrid = document.createElement('div');
   menuGrid.classList.add('menu-grid');
   
   for(let i = 0; i < itemAmount; i++){
      let menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');

      let menuImgWrapper = document.createElement('div');
      menuImgWrapper.classList.add('menu-img-wrapper');

      let image = document.createElement('img');
      image.classList.add('menu-img');

      // Get Image Source
      if(i < 3){
        image.src = menuImages[i];
      }
      else {
        image.src = noImg;
      }
      
      menuImgWrapper.appendChild(image);

      let menuInfo = document.createElement('div');
      menuInfo.classList.add('menu-info');

      let menuName = document.createElement('p');
      menuName.classList.add('menu-name');
      menuName.textContent = `Burger ${i+1}`;

      let menuPrice = document.createElement('p');
      menuPrice.classList.add('menu-price');
      menuPrice.textContent = "$15.00";

      let menuDesc = document.createElement('p');
      menuDesc.classList.add('smaller');
      menuDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Est velit egestas dui id ornare arcu odio ut sem.";

      menuInfo.appendChild(menuName);
      menuInfo.appendChild(menuPrice);
      menuInfo.appendChild(menuDesc);

      menuItem.appendChild(menuImgWrapper);
      menuItem.appendChild(menuInfo);
      
      menuGrid.appendChild(menuItem);
   }

   container.appendChild(menuGrid);
}

export default generateMenuPage;