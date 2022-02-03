function compareArrays(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((num, index) => num === arr2[index])
  );
}

function advancedFilter(arr) {
  let resultArr = arr
    .filter((num) => num > 0)
    .filter((num) => !(num % 3))
    .map((num) => num * 10);

  return resultArr;
}
