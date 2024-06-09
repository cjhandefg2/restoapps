import "regenerator-runtime";
import "../styles/main.scss";
import data from "../public/data/DATA.json";
import '../components/RestaurantItem';

document.addEventListener('DOMContentLoaded', () => {
     const restaurantList = document.getElementById('restaurant-list');

     data.restaurants.forEach((restaurant) => {
          const restaurantItem = document.createElement("div");
          restaurantItem.className = "restaurant-item";
          restaurantItem.innerHTML = `
                         <div class="restaurant-item__image-container">
                              <img src="${restaurant.pictureId}" alt="${restaurant.name}" class="restaurant-item__image">
                              <span class="restaurant-item__rating" aria-label="Rating: ${restaurant.rating}">${restaurant.rating}</span>
                         </div>
                         <h3 class="restaurant-item__name" tabindex="0">${restaurant.name}</h3>
                         <p class="restaurant-item__city" aria-label="City: ${restaurant.city}">${restaurant.city}</p>
                         <p class="restaurant-item__description" aria-label="Description: ${restaurant.description}">${restaurant.description}</p>
                    `;
          restaurantList.appendChild(restaurantItem);
          });

     const menuButton = document.getElementById('menu-button');
     const drawer = document.getElementById('drawer');

     menuButton.addEventListener('click', () => {
          const isOpen = drawer.classList.toggle('open');
          drawer.setAttribute('aria-hidden', !isOpen);
     });

     const skipToContent = document.createElement('a');
     skipToContent.href = '#main-content';
     skipToContent.className = 'skip-to-content';
     skipToContent.innerText = 'Skip to Content';
     document.body.prepend(skipToContent);

     const seeOurPicksButton = document.getElementById('see-our-picks');
     seeOurPicksButton.addEventListener('click', (e) => {
          e.preventDefault();
          document.getElementById('restaurants').scrollIntoView({ behavior: 'smooth' });
     });

     const appBar = document.querySelector('.app-bar');
     window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
          appBar.classList.add('scrolled');
          } else {
          appBar.classList.remove('scrolled');
          }
     });
     });