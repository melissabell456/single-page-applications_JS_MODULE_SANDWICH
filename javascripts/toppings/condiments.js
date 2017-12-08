"use strict";

let condimentPrices = { mustard: 0.50, mayo: 0.50, ketchup: 0.50 };

const addCondiment = function(condimentSelection) {
    return condimentPrices[condimentSelection];
};

module.exports =addCondiment;