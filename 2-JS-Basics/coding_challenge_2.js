// Coding Challenge 2

var years = [2001, 1985, 1994, 2014, 1973];
var years2 = [1965, 2008, 1992, 1908, 2011, 1999];

function calculateAge(year_born){
  return 2018 - year_born
}

function printFullAge(array_of_years) {
  var ages = new Array();
  var boolean_ages = new Array();

  for ( var i = 0; i < array_of_years.length; i++ ) {
    ages[i] = calculateAge(array_of_years[i]);
  }

  for ( var i = 0; i < ages.length; i++ ) {
    if ( ages[i] >= 18 ) {
      console.log("Theyre grown, age: " + ages[i]);
      boolean_ages.push(true);
    } else if ( ages[i] < 18 ) {
      console.log("Still need a ways to go, age: " + ages[i]);
      boolean_ages.push(false);
    }
  }
  return boolean_ages;
}

var full_1 = printFullAge(years);
console.log(years);
console.log(full_1);

var full_2 = printFullAge(years2);
console.log(years2);
console.log(full_2);
