Array.prototype.reverse = function() {
	for(let i = this.length; i >= 0; i--) {
		this.shift()
		this.push(this[i])
	}
	return this;
};

const numbers = [1, 2, 3, 4]
console.log(numbers.reverse());