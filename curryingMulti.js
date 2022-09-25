function multiplyAll(arr) {
	return function(number) {
		return arr.map(ele => ele * number)
	}
}

console.log(multiplyAll([1, 2, 3, 4])(3))