// Function Constructor

// object not created with constructor
var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

// always write function constructors with first letter capitalized
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

// example of adding a function to the prototype property
Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
}


// creating a brand new EMPTY object **this happens because of the _new_ operator**
var john = new Person('John', 1990, 'teacher');

// this works because of inheritance
john.calculateAge();

var jane = new Person('Jane', 1969, 'designer');
jane.calculateAge();

var mark = new Person('Mark', 1948, 'retired');
mark.calculateAge();

