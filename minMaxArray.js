function solve(arr) {
	let minMaxArr = [];
	const sortedArr = arr.sort((a, b) => b - a)
	while(sortedArr.length) {
		minMaxArr.push(Math.max(...sortedArr), Math.min(...sortedArr));
		sortedArr.shift();
		sortedArr.pop();
	}
	return Array.from(new Set(minMaxArr));
}

console.log(solve([15,11,10,7,12]));

//User submitted solution
//Dang this is beyond my JS skills
/*const solve = arr =>
  [...Array(arr.sort((a, b) => a - b).length)].map((_, idx) => idx % 2 ? arr.shift() : arr.pop());*/