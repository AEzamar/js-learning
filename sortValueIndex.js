function sortByValueAndIndex(array)
{
	//let sortedArr = array.map((_, i, ary) => ary.sort((a, b) => a * i + 1 - b * i + 1));
	//let sortedArr;
		let sortedArr = array.sort((a, b) => {
			let indexer = 1
			const productA = a * indexer;
			const productB = b * indexer; 
			if(productA < productB) {
				return -1;
			}
			if(productB > productA) {
				return 1;
			}
			indexer++;
			return 0;
			});
		return sortedArr;
	//return  Array(...new Set(...sortedArr));
};

console.log(sortByValueAndIndex([23, 2, 3, 4, 5]));

function sortByValueAndIndex1(array)
{
	let sortedArray;
	function customSort(a, b, index) {
		if(a * index + 1 < b * index + 1) return -1;
		if(b * index + 1 > a * index + 1) return 1;
		return 0;
	};
	for(let i = 0; i < array.length; i++) {
		sortedArray = array.sort(customSort)
	};
	return sortedArray;
}

console.log(sortByValueAndIndex1([23, 2, 3, 4, 5]));
