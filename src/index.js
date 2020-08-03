import './css/stylesheet.css';


import colors from './modules/colors';
import waiter from './modules/waiter';

console.log(colors.getRandomColor());

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('h1').style.color = colors.getRandomColor();
 
  waiter.handleSubmitNewMeal();
  waiter.render();
});


