const randNum = function() {
	return Math.floor(Math.random() * 6) + 1;
};

function fillArr(n) {
	/*const newArr = [];
	for(let i = 0; i < n; i++) {
		newArr.push(i);
	};
	return newArr;*/
	return Array(n).fill(0).map((_, i) => i)
	//return Array.from({ length: n}, (_, i) => i = randNum());
	//return Array.from({ length: n}, (_, i) => i += 0 + n);
};

console.log(fillArr(5));