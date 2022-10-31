function arrayPacking(a) {
	return a.map(num => toString(num, 2)).sort((a, b) => a - b)
}

console.log(arrayPacking([24, 85, 0]));