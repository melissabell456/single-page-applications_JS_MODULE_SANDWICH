"use strict";
// if you cannot answer the questions in the example, do not copy and paste it. Know what's going on before you use code you didn't write

// Private variable to store the different meat prices. How is it private?
let meatPrices = { turkey: 0.75, ham: 1.25, none: 0.00 }; //why is one key in quotes but the other isn't?

const addMeat = function(meatSelection) {
  console.log(meatSelection);
    return meatPrices[meatSelection];
  // code that grabs the correct meat price and returns it
};

module.exports =addMeat;