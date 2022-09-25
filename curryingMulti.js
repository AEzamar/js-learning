function multiplyAll(arr) {
	return function(number) {
		return arr.map(ele => ele * number)
	}
}

console.log(multiplyAll([1, 2, 3, 4])(3))
console.log(multiplyAll([12, 22, 31, 69])(2))

//User submitted solution for the challenge
//const multiplyAll = arr => n => arr.map(x => n * x);