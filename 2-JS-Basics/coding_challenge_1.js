// Coding Challenge
// so many variables
var pablo_height = 175.8;
var pablo_age = 25;

var callie_height = 152.4;
var callie_age = 21;

var erin_height = 176.8;
var erin_age = 25;


// this would be so much easier in a function
var pablo_score = pablo_height + ( pablo_age * 5 );
var callie_score = callie_height + ( callie_age * 5 );
var erin_score = erin_height + ( erin_age * 5 );


// part 1
if ( pablo_score > callie_score ) {
  console.log('Pablo wins with a score of ' + pablo_score + '!');
} else if ( pablo_score === callie_score ) {
  console.log("Its a tie :(");
} else {
  console.log('Callie wins with a score of ' + callie_score + '!');
}

// part 2
if ( pablo_score > callie_score && pablo_score > erin_score ){
  console.log('Pablo wins with a score of ' + pablo_score + '!');
} else if ( erin_score > callie_score && erin_score > pablo_score ){
  console.log('Erin wins with a score of ' + erin_score + '!');
} else if ( pablo_score === erin_score && pablo_score === callie_score && erin_score === callie_score ) {
  console.log(' how the fuck is this a three way tie? ' + pablo_score);
} else if ( pablo_score === erin_score ) {
  console.log('Pablo && Erin Tie with a score of ' + pablo_score);
} else if ( callie_score === erin_score ) {
  console.log('Callie && Erin Tie with a score of ' + callie_score);
} else if ( pablo_score === callie_score ) {
  console.log("Its a tie :(");
} else {
  console.log('Callie wins with a score of ' + callie_score + '!');
}


