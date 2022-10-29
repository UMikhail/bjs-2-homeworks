"use strict"
function solveEquation(a, b, c) {
  let arr;
  const d = b**2-4*a*c
  if (d < 0) {
    arr = []
  } else if (d == 0) {
    let d1 = -b/(2*a)
    arr = [d1]
  } else if (d > 0) {
    let d2 = (-b + Math.sqrt(d) )/(2*a)
    let d3 = (-b - Math.sqrt(d) )/(2*a)
    arr = [d2, d3]
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
