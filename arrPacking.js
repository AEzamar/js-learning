function arrayPacking(a) {
	return a
		.map(num => num.toString(2))
		.map(binStr => binStr.padStart(8, '0'))
		.join("")
		//.reduce((total, curr) => total + curr , 0)
		//.reduce((total, curr) => total + curr , 0)
		//.map(binNum => parseInt(binNum, 2))
		//.sort((a, b) => a - b)
}

console.log(arrayPacking([24, 85, 0]));
//console.log(parseInt('1111', 2));
//console.log(parseInt('11000', 2));