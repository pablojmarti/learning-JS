// Lecture: boolean logic and siwtch
var age = 25;

if (age < 20 ) {
  console.log('John is a teen');
} else if ( age >= 20 && age < 30 )  {
  console.log('John is pretty young')
} else {
  console.log('John is an adult');
}

var job = 'teacher';

switch (job) {
  case 'teacher':
    console.log('John teaches kids.');
    break;
  case 'driver':
    console.log('John is a driver.');
    break;
  case 'software engineer':
    console.log('CODER');
    break;
  default:
    console.log('John has no job :(');
}
