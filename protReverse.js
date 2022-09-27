Array.prototype.reverse = function() {
	let temp_arr = [];
	for(let i = this.length; i > 0; i--) {
		temp_arr.push(this.pop());	
	};
	this.push(...temp_arr);
	return this;
};

const numbers = [1, 2, 3, 4]
console.log(numbers.reverse());


Array.prototype.newReverse = function() {
	let i = 0;
	while(i <= this.length) {
		this.unshift(this[i]);
		i++;
	};
	return this;
};

const letters = ['a', 'b', 'c', 'd'];
console.log(letters.newReverse());