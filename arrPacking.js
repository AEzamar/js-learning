function arrayPacking(a) {
	a.map(num => toString(num, 2)).map((a, b) => a - b)
}