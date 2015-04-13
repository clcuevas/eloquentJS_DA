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
function groupBy(array, elementGroup) {
  var groups = {};
  array.forEach(function(person) {
    var getCentury = elementGroup(person);
    if(getCentury in groups) {
      groups[century].push(person);
    } else {
      groups[century] = [person];
    }
  });
  return groups;
}

var getCentury = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});
console.log(getCentury);

for (var century in byCentury) {
  var ages = byCentury[century].map(function(person) {
    return person.died - person.born;
  });
  console.log(century + ": " + average(ages));
}

