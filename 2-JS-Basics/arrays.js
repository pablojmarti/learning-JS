// Lecture: Arrays

// array syntax example
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

// access array values
console.log(names);
console.log(names[0]);

// mutate value of array
names[1] = 'Ben';

console.log(names);

// array with multiple data types
var john = ['John', 'Smith', 1990,  false];

john.push('blue');                // add to end of array
john.unshift('Mr.');              // add to beginning
john.pop();                       // standard pop
john.shift();                     // remove first element
console.log(john);

console.log(john.indexOf('Smith'));

if (john.indexOf('teacher') === -1) {
  console.log(john[0] + " is not a teacher");
}
