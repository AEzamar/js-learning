function solve(arr) {
	return arr.sort((a, b) => Math.max(a) - Math.min(a));
	/*let minMaxArr = [];
	const sortedArr = arr.sort((a, b) => b - a)
	while(sortedArr.length) {
		minMaxArr.push(Math.max(...sortedArr), Math.min(...sortedArr));
		sortedArr.shift();
		sortedArr.pop();
	}
	return Array.from(new Set(minMaxArr));*/
}

console.log(solve([15,11,10,7,12]));