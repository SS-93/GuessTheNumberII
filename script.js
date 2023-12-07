/* Within the function called "randomNumber", it allows for a two parameters to be passed. One will be the value that is taken from the input from the HTML document. The other is a random number that has been generated.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: numberToGuess
*/

function randomNumber(userGuess, computersNumber) {
  //define the range
  let minimum = 1;
  let maximum = 100;

  // YOUR CODE BELOW
  if (userGuess < minimum || userGuess > maximum) {
    return "Please enter a number between 1 and 100.";
  }
  if (userGuess == computersNumber) {
    return ` Correct! You guessed ${userGuess}!`;
  } else if (userGuess < computersNumber) {
    return "Higher";
  } else {
    return "Lower";
  }
}

let currentNumber = 50;
//define the range
let lowest = 1;
let highest = 100;

//  function startCompGuess (currentNumber) { // notes for self can declare a variable within the function ("variable value assigned 1")

// computerguess(reply) two cases one needs to be lower and one defined as a string. " low"

// YOUR CODE ABOVE

//* Have the Computer Guess your Number ---------------------------------------------
/* 
    Build out the functionality for the computer to guess and evaluate your random number.

    - There are two static functions framed. DO NOT alter the name or parameters of these functions:
        - startCompGuess(num)
        - compGuess(reply)

    *hint:
        - don't forget that variables are a way for us to store information and update later.
        - What is the "current number"? The lowest number? highest?

    You are not limited to just these functions. Feel free to create a new function that may be called to help manage the flow of your code.
*/

function startCompGuess(num) {
  // This should return a string that denotes the first guessed number

  // YOUR CODE ...

  return `is your current number ${currentNumber}`;
}

//  console.log(startCompGuess (32))

let createGuess = () => {
  currentNumber = Math.floor(Math.random() * 100 + 1); //Used the Math Object
  return currentNumber;
};

// declare lowest and highest and then use these variables to refactor the function.

// check for input number = to guessed number

function onLowerButtonClick() {
  highest = currentNumber - 1;
  currentNumber = createGuess();
  return `Your number is lower? is it the ${currentNumber}`;
}
function onHigherButtonClick() {
  smallNum = currentNumber + 1;
  currentNumber = createGuess();
  return `Your number is higher? Is it ${currentNumber}?`;
}

function onThatsItButtonClick() {
  return `I knew it was ${currentNumber}`;
}

function compGuess(reply) {
  switch (reply) {
    case "lower":
      highest = currentNumber - 1;
      currentNumber = Math.floor((lowest + highest) / 2);
      return `Your number is lower?' Is it ${currentNumber}?`;

    case "higher":
      lowest = currentNumber + 1;
      currentNumber = Math.floor((lowest + highest) / 2);
      return `Your number is lower? Is it ${currentNumber}`;
    case "Thats it":
      return `I knew it was ${currentNumber}!`;

    default:
      return "Hey you've got to try again! Invalid response.";
  }
}

console.log(startCompGuess());

//  review the gaps
// console.log(compGuess ( "Higher"));
