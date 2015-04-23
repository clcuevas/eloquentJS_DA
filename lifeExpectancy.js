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
var centuryGroup = ancestry.map(function(person) {
	return Math.ceil(person.died / 100);
});

function groupBy(array, centuryGroup) {
  var groups = {};
  array.forEach(function(element) {
    var groupName = centuryGroup(element);
    //if century is in groups object
    if(groupName in groups) {
      groups[groupName].push(element);
    } else {
      groups[groupName] = [element];
    }
  });
  return groups;
}

var getCentury = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});

for (var century in getCentury) {
  var ages = getCentury[century].map(function(person) {
    return person.died - person.born;
  });
  console.log(century + ": " + average(ages));
}

