var getCentury = ancestry.map(function(person) {
	return Math.ceil(person.died / 100);
});
console.log(getCentury);

var getAge = ancestry.map(function(person) {
	return person.died - person.born;
});
console.log(getAge);
