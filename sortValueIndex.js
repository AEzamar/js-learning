function sortByValueAndIndex(array)
{
	//let sortedArr = array.map((_, i) => ary.sort((a, b) => a * i + 1 - b * i + 1));
	let sortedArr;
	for(let i = 0; i < array.length; i++) {
		sortedArr = array.sort((a = a * i + 1, b = b * i + 1) => a - b);
	}
	return sortedArr;
	//return  Array(...new Set(...sortedArr));
} 

console.log(sortByValueAndIndex([23, 2, 3, 4, 5]));