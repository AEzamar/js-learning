/*function fillArr(n) {
	return n > 0 ? [...Array(n).keys()] : [];
};*/

const arr = function(N) => N > 0 ? [...Array(N).keys()] : [];
console.log(arr(5));