function sumMix(arr) {
	return arr.map(ele => Number(ele)).reduce((total, curr) => total + curr, 0);
};

/*console.log(sumMix([9, 3, '7', '3']));
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']));*/

const sumMixArrow = (arr) => arr.map(item => Number(item)).reduce((total, curr) => total + curr, 0);

console.log(sumMixArrow([9, 3, '7', '3']));
console.log(sumMixArrow(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
console.log(sumMixArrow(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']));