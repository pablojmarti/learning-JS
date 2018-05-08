// Lecture: Hoisting

// function expression
calculateAge(1993);

function calculateAge(year) {
  console.log(2018 - year);
}


// retirement(1993);
// this doesn't work because it is a function expression

var retirement = function(year) {
  console.log(65 - (2016 - year));
}

// variables

// variable is undefined
console.log(age);
var age = 25;

// variable is defined
console.log(age);


function foo() {
  console.log(age);
  var age = 65;
  console.log(age);
}

foo();
console.log(age);
