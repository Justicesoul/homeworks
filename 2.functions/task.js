// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[arr.length - 1];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  const avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    if (max < func(arrOfArr[i])) {
      max = func(arrOfArr[i]);
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return Math.abs(max - min);
}
