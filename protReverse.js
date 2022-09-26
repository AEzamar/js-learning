Array.prototype.reverse = function() {
	for(let i = 0; i <= this.length; i++) {
		this.unshift(this.pop());
	};
	return this;
};

const numbers = [1, 2, 3, 4]
console.log(numbers.reverse());