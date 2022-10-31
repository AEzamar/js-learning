function arrayPacking(a) {
	return parseInt(a
		.map(num => num.toString(2))
		.sort((a, b) => a - b)
		.map(binStr => binStr.padStart(8, '0'))
		//.reduce((total, curr) => total + curr , 0)
		, 2)
		//.map(binNum => parseInt(binNum, 2))
		//.sort((a, b) => a - b)
}

console.log(arrayPacking([24, 85, 0]));
console.log(parseInt('1111', 2));
console.log(parseInt('11000', 2));