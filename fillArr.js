function fillArr(n) {
	return Array(n).fill(0).map((_, i) => i)
};

console.log(fillArr(5));