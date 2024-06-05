const functions = require("./mathFunctions.js");

function isRightAngledTriangle(sideA, sideB, sideC) {
  const sideASquared = functions[2](sideA);
  const sideBSquared = functions[2](sideB);
  const sideCSquared = functions[2](sideC);

  return sideCSquared === sideASquared + sideBSquared;
}

module.exports = isRightAngledTriangle;
