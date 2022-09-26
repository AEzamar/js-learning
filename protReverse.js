Array.prototype.reverse = function() {
	for(let i = 0; i < this.length; i++) {
		const first = this.shift()
		console.log(first);
		this.push(first);
	}
	return this;
};

const numbers = [1, 2, 3, 4]
console.log(numbers.reverse())