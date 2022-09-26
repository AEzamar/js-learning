Array.prototype.reverse = function() {
	for(let i = this.length; i > 0; i--) {
		this.push(this.shift())
	}
	return this;
};

const numbers = [1, 2, 3, 4]
console.log(numbers.reverse());