"use strict";

let breadPrices = { baguette: 1.00, sourdough: 1.40, "multi-grain": 1.99 };

const addBread = function(breadSelection) {
    return breadPrices[breadSelection];
};

module.exports =addBread;