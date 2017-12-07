"use strict";

let veggiePrices = { tomato: 1.00, spinach: 1.00, cucumber: 0.50 };

const addVeggie = function(veggieSelection) {
    console.log(veggieSelection);
    return veggiePrices[veggieSelection];
};

module.exports = { addVeggie };