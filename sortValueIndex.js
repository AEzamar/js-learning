function sortByValueAndIndex(array)
{
	//let sortedArr = array.map((_, i, ary) => ary.sort((a, b) => a * i + 1 - b * i + 1));
	//let sortedArr;
	for(let i = 0; i < array.length; i++) {
		sortedArr = array.sort((a, b)=> {
			const productA = a * i + 1;
			const productB = b * i + 1; 
			if(productA < productB) return -1;
			if(productB > productB) return 1;
		});
	}
	return sortedArr;
	//return  Array(...new Set(...sortedArr));
} 

console.log(sortByValueAndIndex([23, 2, 3, 4, 5]));