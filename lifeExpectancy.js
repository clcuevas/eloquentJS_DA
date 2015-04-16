/*Compute and output the average age of the people
in the ancestry data set per century*/

function average(array) {
	function plus(a, b) {
		return a + b;
	}
	return array.reduce(plus) / array.length;
}

// /*this shows what century a person belongs to
// from the ancestry array list*/
// var getCentury = ancestry.map(function(person) {
// 	return Math.ceil(person.died / 100);
// });
var centuryObj = {};

ancestry.forEach(function(person) {
  var century = Math.ceil(person.died / 100);
  if (!(century in centuryObj)) {
    centuryObj[century] = [];
  }
  centuryObj[century].push(person.died - person.born);
  console.log(centuryObj[century]);
});

for(century in centuryObj) {
  console.log(century + ": " + Math.round((average(centuryObj[century])) * 10) / 10);
}

