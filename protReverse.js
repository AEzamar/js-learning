Array.prototype.reverse = function() {
	return [this[this.length - 1]];
};

const numbers = [1, 2, 3, 4]
console.log(numbers.reverse());