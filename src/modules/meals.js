// This will be the store

const getTaxAmount = function () {
  return this.baseMealPrice * (this.taxRate / 100);
};


const  mealLog =[

];



export default {
  mealLog,
  getTaxAmount
};

