function sortByValueAndIndex(array)
{
	//return arr.map((ele, i, arr) => arr.sort((a, b) => (a * (i + 1)) - (b + (i +1))))
	let sortedArr = array.map((_, i, ary) => ary.sort((a, b) => a * i + 1 - b * i + 1));
	return  Array(...new Set(...sortedArr));
} 

console.log(sortByValueAndIndex([23, 2, 3, 4, 5]));