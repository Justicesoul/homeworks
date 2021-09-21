"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d === 0) {
    arr = [-b / (2 * a)];
  } else if (d > 0) {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalToPay = amount - contribution;
  let dateNow = new Date();
  let year1 = date.getFullYear();
  let year2 = dateNow.getFullYear();
  let fullYearsInMonth = (year1 - year2 - 1) * 12;
  let month1 = date.getMonth();
  let month2 = dateNow.getMonth();
  let mounthLeft = 11 - month1 + (month2 + 1);
  let totalMonth = fullYearsInMonth + mounthLeft;
  let newPercent = (1 / 12) * (percent / 100);
  let totalAmount =
    totalToPay *
    ((newPercent + newPercent) / Math.pow(1 + newPercent, totalMonth) - 1);
  console.log(totalAmount.toFixed(2));
  return totalAmount.toFixed(2);
}
