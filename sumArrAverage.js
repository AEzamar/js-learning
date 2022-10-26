const sumAverage = (arr) => {
  let result = 0;
  for(const subArr in arr) {
    result += subArr.reduce((total, curr, _, arr) => total + curr / arr.length, 0);
  }
  return Math.floor(result);
}

console.log(sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]));
console.log(sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]]));