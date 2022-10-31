function arrayPacking(a) {
	return a.map(num => num.toString(2)).sort((a, b) => a - b).map(binNum => Number(binNum)).map(binNum => binNum.toString(10));
}

console.log(arrayPacking([24, 85, 0]));