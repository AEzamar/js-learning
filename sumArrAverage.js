const sumAverage = (arr) => {
  let result = 0;
  const average = (subArr) => {
    return subArr.reduce((total, curr, arr) => total + curr / arr.length, 0);
  }
  for(let i = 0; i < arr.length; i++) {
    result += average(arr[i]);
  }
  return Math.floor(result);
}

console.log(sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]));