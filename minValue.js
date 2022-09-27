function min(arr, toReturn) {
  const minimum = Math.min(...arr);
  if(toReturn.toLowerCase() === 'value') return minimum;
  else if(toReturn.toLowerCase() === 'index') return arr.indexOf(minimum);
};

console.log(min([2, 4, 8, 1, -3, 0, 5, 7], 'value'));
console.log(min([2, 4, 8, 1, 3, 0, 5, 7], 'index'));

//User submitted solution

/*function min(arr, toReturn) {
  var val = Math.min.apply(null, arr)
  return toReturn == 'value' ? val : arr.indexOf(val)
}*/