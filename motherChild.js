function average(array) {
  function plus(a, b) { 
  	return a + b; 
  }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// var getPeopleWithMother = ancestry.filter(function(person) {
// 	return byName[person.mother] != null;
// });
// console.log(getPeopleWithMother);

// var getAgeMotherGaveBirth = getPeopleWithMother.map(function(person) {
// 	return person.born - byName[person.mother].born;
// });
// console.log(getAgeMotherGaveBirth);

// console.log(average(getAgeMotherGaveBirth));

//person parameter being passed is the array
var ageDifference = ancestry.filter(function(person) {
	return byName[person.mother] != null; //verifies mother property is not null
}).map(function(person) {
	return person.born - byName[person.mother].born; //age mother gave birth
});
// → 31.2
average(ageDifference);
