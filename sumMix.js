function sumMix(arr) {
	return arr.map(ele => Number(ele)).reduce((total, curr) => total + curr, 0);
};

console.log(sumMix([9, 3, '7', '3']));