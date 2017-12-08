"use strict";

const bake = require("./DOMhandler");


var toppingChoice = document.getElementsByTagName("input");
var addBtn = document.getElementById("addToCart");

addBtn.addEventListener("click", bake.consolidateSelections);
for (let i = 0; i < toppingChoice.length; i++) {
    toppingChoice[i].addEventListener("change", bake.getToppingStats);
}
