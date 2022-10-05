function sortByValueAndIndex(arr)
{
	//return arr.map((ele, i, arr) => arr.sort((a, b) => (a * (i + 1)) - (b + (i +1))))
	return arr.map((ele, i) => ele  * i).sort((a, b) => a - b);
} 

console.log(sortByValueAndIndex([23, 2, 3, 4, 5]))