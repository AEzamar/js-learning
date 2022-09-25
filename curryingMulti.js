alert("Testing")
function multiplyAll(arr) {
	return function(number) {
		return arr.forEach(ele => ele * number)
	}
}

console.log(multiplyAll([1, 2, 3, 4])(2))