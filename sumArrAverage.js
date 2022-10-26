const sumAverage = (arr) => {
  let result;
  for(let i = 0; i < arr.length; i++) {
    result += arr[i].reduce((total, curr, _, arr1) => total + curr / arr1.length, 0);
  }
  return Math.floor(result);
}

console.log(sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]));
console.log(sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]]));