// variable decralation
var penName = "Matadore";
var bookName = "Math";
var other = "other";

// array
var other = ["mango", "book", "paper"];
other.indexOf("math"); //-1
other.push("what");
other.pop();

// condition

if (other.length >= 4) {
  console.log("you have too many task on your handlist");
} else if (other.length == 4) {
  console.log("you have just half task on your desk");
} else {
  console.log("WOW!! You have a clean desk man");
}
