function maxTriSum(numbers){
	const sortedNumbers = numbers.sort((a, b) => b - a);
	const numbersSet = new Set(sortedNumbers);
	const maxTriplet = Array.from(numbersSet).slice(0, 3);
	return maxTriplet.reduce((total, curr) => total + curr, 0);
};

console.log(maxTriSum([3,2,6,8,2,3]));
console.log(maxTriSum([2,9,13,10,5,2,9,5]));
console.log(maxTriSum([2,1,8,0,6,4,8,6,2,4]));
console.log(maxTriSum([-3,-27,-4,-2,-27,-2]));

//User submitted solution
//This is really good
/*const maxTriSum = numbers => {
  const [a,b,c,...rest] = [...new Set([...numbers])].sort((a,b)=>b-a)
  return a+b+c
}*/