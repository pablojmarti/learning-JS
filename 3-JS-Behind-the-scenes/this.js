// Lecture: The This Keyword

console.log(this);
calculateAge(1993);

function calculateAge(year) {
  console.log(2016 - year);
  console.log(this);
}

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function(){
    console.log(this);
    console.log(2016 - this.yearOfBirth);

//   function innerfunction() {
//     console.log(this);
//   }
//   innerfunction();
  }
};

john.calculateAge();


var mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;

mike.calculateAge();
