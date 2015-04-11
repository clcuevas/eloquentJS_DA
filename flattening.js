var arrays = [[1, 2, 3], [4, 5], [6]];

//run the reduce array method with the concat method
console.log(arrays.reduce(function(a, b) {
	return a.concat(b);
}));

//should return [1, 2, 3, 4, 5, 6]
