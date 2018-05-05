// Lecture: Functions

function calculateAge(year_of_birth) {
  var age = 2018 - year_of_birth;
  return age;
}

var age_john = calculateAge(1990);
var age_mike = calculateAge(1969);
var age_mary = calculateAge(1948);

console.log(age_john);
console.log(age_mike);
console.log(age_mary);


function years_until_retirement(name, year_of_birth) {
  var age = calculateAge(year_of_birth);
  var retirement = 65 - age;
  if (retirement >= 0){
    console.log( name + ' retires in ' + retirement + ' years.');
  } else {
    console.log(name + ' retired');
  }
}

years_until_retirement('john', 1990);
years_until_retirement('mike', 1969);
years_until_retirement('mary', 1948);
