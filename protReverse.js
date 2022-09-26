Array.prototype.reverse = function() {
	for(let item in this) {
		this.unshift(item);
	}
	return this;
};

const numbers = [1, 2, 3, 4]
console.log(numbers.reverse());