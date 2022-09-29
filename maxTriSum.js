function maxTriSum(numbers){
	const sortedNumbers = numbers.sort((a, b) => b - a);
	const maxTriplet = sortedNumbers.slice(0, 3);
	return maxTriplet.reduce((total, curr) => total + curr, 0);
};

console.log(maxTriSum([3,2,6,8,2,3]))