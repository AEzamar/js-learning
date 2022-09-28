function fillArr(n) {
	//return Array(n).fill(0).map((_, i) => i)
	return [...Array(n).keys()];
};

console.log(fillArr(5));