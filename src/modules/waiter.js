import meals from './meals';

import icon from '../img/icon-default.ico';

const generateRandomId = function () {
  return Math.floor(Math.random() * Math.floor(100000));
};

const generateMealLogString = function (mealLog) {
  let mealLogTableString = `
    <table border='1|1' style='width:100%;'>
      <tr>
        <th>Meal Id</th>
        <th>Base Price</th>
        <th>Tax %</th>
        <th>Tip %</th>
        <th>Tax Amount</th>
        <th>Tip Amount</th>
       </tr>
  `;

  for (let i = 0; i < mealLog.length; i++) {
    mealLogTableString += `
      <tr>
      <td>${mealLog[i].mealId}</td>
      <td>$${mealLog[i].baseMealPrice}</td>
      <td>${mealLog[i].taxRate}</td>
      <td>${mealLog[i].tipPercentage}</td>
      <td>${mealLog[i].taxAmount}</td>
      <td>${mealLog[i].tipAmount}</td>
    `;
  }
  mealLogTableString += '</table>';

  return mealLogTableString;
};


const getTaxAmount = function (price, tax) {
  return (price * (tax / 100)).toFixed(2);
};

const getTipAmount = function (price, tip) {
  return (price * (tip / 100)).toFixed(2);
};

const addNewMeal = function (price, tax, tip) {
  meals.mealLog.push(
    {
      mealId: generateRandomId(),
      baseMealPrice: price,
      taxRate: tax,
      tipPercentage: tip,
      taxAmount: getTaxAmount(price, tax),
      tipAmount: getTipAmount(price, tip)
    }
  );
};

addNewMeal(20, 10, 25);
addNewMeal(300, 25, 55);
addNewMeal(8, 9, 4);
addNewMeal(189, 10, 15);

const handleSubmitNewMeal = function () {
  let form = document.querySelector('#ringUpForm');
  form.addEventListener('submit', event => {
    let price = document.querySelector('#basePriceInput').value;
    let tax = document.querySelector('#taxRate').value;
    let tip = document.querySelector('#tipRate').value;

    event.preventDefault();

    addNewMeal(price, tax, tip);
    
    
    form.reset();
    document.querySelector('#basePriceInput').focus();

    document.querySelector('#customer').innerHTML = `
      <p>subtotal: ${parseFloat(price) + parseFloat(getTaxAmount(price, tax))}</p>
      <p>tip: ${parseFloat(getTipAmount(price, tip))} </p>
      <p>total: ${parseFloat(getTipAmount(price, tip)) + parseFloat(price) + parseFloat(getTaxAmount(price, tax))} </p>
    `;

    render();
  });
  
};



const render = function () {
  let mealLog = [...meals.mealLog];
  let mealLogDemo = document.querySelector('.meal-log');
  let visibleString = generateMealLogString(mealLog);
  mealLogDemo.innerHTML = visibleString;

  document.querySelector('.form-img').innerHTML = `<img src="${icon}">`;
  
};

export default {
  render,
  handleSubmitNewMeal
};