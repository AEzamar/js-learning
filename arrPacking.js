function arrayPacking(a) {
	return a.map(num => num.toString(2)).sort((a, b) => a - b).map(binNum => Number(binNum)).reduce((total, curr) => total + curr, 0);
}

console.log(arrayPacking([24, 85, 0]));