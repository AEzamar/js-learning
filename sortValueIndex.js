function sortByValueAndIndex(arr)
{
	return arr.map((ele, i, arr) => arr.sort((a, b) => (a * (i + 1)) - (b + (i +1))))
}