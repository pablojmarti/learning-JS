// Lecture: Objects

// example object using key value pairs
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false
};

console.log(john);


// retrieving values from objects
console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

// data mutation
john.lastName = 'Miller';
john['job'] = 'CODER';

console.log(john);


// creating empty Object
var jane = new Object();

// initializing empty Object
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
