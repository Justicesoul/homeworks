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
  if (typeof percent !== "number") {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (typeof contribution !== "number") {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (typeof amount !== "number") {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else {
    let totalToPay = amount - contribution;
    let dateNow = new Date();
    let year1 = date.getFullYear();
    let year2 = dateNow.getFullYear();
    let fullYearsInMonth = (year1 - year2 - 1) * 12;
    let month1 = date.getMonth();
    let month2 = dateNow.getMonth();
    let monthLeft = 12 - month1 + month2;
    let totalMonth = fullYearsInMonth + monthLeft;
    let newPercent = percent / 12 / 100;
    let totalAmount =
      totalToPay *
      (newPercent + newPercent / (Math.pow(1 + newPercent, totalMonth) - 1)) *
      totalMonth;
    let result = Math.round(totalAmount * 100) / 100;

    console.log(result);
    return result;
  }
}
