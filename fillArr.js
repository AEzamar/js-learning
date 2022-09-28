function fillArr(n) {
	return n > 0 ? [...Array(n).keys()] : [];
};

console.log(fillArr(5));