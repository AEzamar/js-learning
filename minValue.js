function min(arr, toReturn) {
  const minimum = Math.min(...arr);
  if(toReturn.toLowerCase() === 'value') return minimum;
  else if(toReturn.toLowerCase() === 'index') return arr.indexOf(minimum);
};

console.log(min([2, 4, 8, 1, -3, 0, 5, 7], 'value'));
console.log(min([2, 4, 8, 1, 3, 0, 5, 7], 'index'));