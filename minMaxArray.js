function solve(arr) {
	return arr.sort(function(a, b) {
		return Math.max(a) && Math.min(b)
	});
};

console.log(solve([15,11,10,7,12]));