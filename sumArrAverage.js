const sumAverage = (arr) => {
  let result = 0;
  const average = (subArr) => {
    return subArr.reduce((total, curr, _, arr) => (total + curr) / arr.length, 0);
  }
  for(let i = 0; i < arr.length; i++) {
    result += average(arr[i]);
  }
  return result;
}