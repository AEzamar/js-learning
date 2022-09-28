const randNum = function() {
	return Math.floor(Math.random() * 6) + 1;
};

function fillArr(n) {
	return Array(n).fill(0).map((_, i) => i)
};

console.log(fillArr(5));