Array.prototype.reverse = function() {
	for(let i = 0; i < this.length; i++) {
		const last = this.pop()
		this.unshift(last);
	}
	return this;
};

const numbers = [1, 2, 3, 4]
console.log(numbers.reverse())