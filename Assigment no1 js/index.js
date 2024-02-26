// Take all the papers and assign marks, declare the total Numbers
// Find percentage
// Find grades
// If Grade is between 51 and 60, then print "Your grade is C"
// If Grade is between 61 and 70, then print "Your grade is B"
// If Grade is between 71 and 80, then print "Your grade is A"
// If Grade is between 81 and 100, then print "Your grade is A1"
// If Grade is less than 50, then print "Sorry you are failed"

// solution: for example i have 7 subjects as mentioned below
// let considered the total marks in each subject is 100 , so the total markes will be 700

var englishMarks = 90;
var urduMarks = 85;
var chemistryMarks = 66;
var biologyMarks = 56;
var physicsMarks = 91;
var mathMarks = 43;
var islamyatMarks = 98;

let totalNumbers =
  englishMarks +
  urduMarks +
  chemistryMarks +
  biologyMarks +
  physicsMarks +
  mathMarks +
  islamyatMarks;
console.log(
  "Dear student your total numbrs is all subjects are " + totalNumbers
);

let percent = (totalNumbers / 700) * 100;
const percentage = percent.toFixed(2);
console.log("Dear student your percentage is  " + percentage);

// now grades
if (percentage >= 0 && percentage <= 50) {
  console.log("Sorry you are failed");
} else if (percentage >= 51 && percentage <= 60) {
  console.log("Your Grade is `C`");
} else if (percentage >= 61 && percentage <= 70) {
  console.log("Your Grade is `B`");
} else if (percentage >= 71 && percentage <= 80) {
  console.log("Your Grade is `A`");
} else if (percentage >= 81 && percentage <= 100) {
  console.log("Your Grade is `A1`");
}
