"use strict";

let cheesePrices = { meunster: 1.00, cheddar: 1.50, provolone: 1.00 };

const addCheese = function(cheeseSelection) {
    console.log("hi");
    return cheesePrices[cheeseSelection];
};

module.exports = { addCheese };