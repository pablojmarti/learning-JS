// Lecture: Objects && Methods

// object with arrays and functions
// v1
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],              // array inside an object
  calculateAge: function() {         // function expression NOT statement inside object
    return 2018 - this.yearOfBirth;
  }
};

console.log(john);
console.log(john.family);
console.log(john.family[2]);
console.log(john.calculateAge());

var age = john.calculateAge();

console.log(age);

john.age = age;

console.log(john);

// object v2
var john2_0 = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],  
  calculateAge: function() {
    this.age = 2016 - this.yearOfBirth;
  }
};

console.log(john2_0);

john2_0.calculateAge();

console.log(john2_0);
