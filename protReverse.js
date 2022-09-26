Array.prototype.reverse = function() {
	this.unshift(this.pop())
	console.log(this)
}

const numbers = [1, 2, 3, 4]
console.log(Array.prototype.reverse(numbers))