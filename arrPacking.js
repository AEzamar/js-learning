function arrayPacking(a) {
	return a
		.map(num => num.toString(2))
		//.map(binNum => parseInt(binNum, 10))
		//.sort((a, b) => a - b)
}

console.log(arrayPacking([24, 85, 0]));