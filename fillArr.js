const randNum = function() {
	return Math.floor(Math.random() * 6) + 1;
};

function fillArr(n) {
	/*for(let i = 0; i < size; i++) {

	};*/

	//return Array.from({ length: n}, (_, i) => i = randNum());
	return Array.from({ length: n}, (_, i) => i = n);
};

console.log(fillArr(5));