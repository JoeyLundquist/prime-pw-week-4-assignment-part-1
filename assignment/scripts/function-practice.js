console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name;
}

// Remember to call the function to test
console.log('Test - should say "Hello, Joey"', helloName('Joey') );

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log('Test - Should give us firstNumber plus secondNumber ' + addNumbers(123, 321) );


// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3){
  let answer = num1 * num2 * num3;
  return answer;
}
console.log('Test - Should give us the 3 numbers multiplied together: ', multiplyThree(3,4,5) );

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number){
  if (number>0){
    return true;
  }else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let names = ['Joey', 'Ashlee', 'Des', 'Dustin'];
let names2 = ['Matt', 'Marisha', 'Liam', 'Sam', 'Ashley', 'Laura', 'Travis'];
let names3 = [];

function getLast(array) {
  return array[array.length-1];
}

console.log('Testing my getLast function, should say Dustin:', getLast(names));
console.log('Testing my getLast function, should say Dustin:', getLast(names2));
console.log('Testing my getLast function, should say undefined:', getLast(names3));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let testNumbers = [2, 3, 6, -10, 0, 55, 26, 97]

function find( value, array ){
  for(let i=0; i<array.length-1; i++){
    if(value === array[i]){
      return true;
    }
  } 
  return false;
}

console.log('Testing find function. Should show false as 100 is not in the list:', find(100, testNumbers));
console.log('Testing find function, should show true as 55 is in the list:', find(55, testNumbers));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if(letter === string.charAt(0)){
    return true;
  }
  return false;
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
let addAll = [2, 4, 6, 8, 10]
let addAll2 = [5, 6, 10, 33, -27, 123, 321, 900, -99]
function sumAll(array){
  let sum = 0
  // TODO: loop to add items
  for(let i=0; i<=array.length-1; i++){
    sum += array[i];
  }
  return sum;
}
console.log('Testing sumAll function, should show 179 being the sum of testNumbers:', sumAll(testNumbers));
console.log('Testing sumAll function, should show 30 being the sum of addAll:', sumAll(addAll));
console.log('Testing sumAll function, should show 1272 being the sum of addAll2:', sumAll(addAll2));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let num10 = [1, 2, 3, -3, -2, -1];
let num11 = [1, -3, 5, -7, 9, -11, 13, -15, 17, -19, 20];
let num13 = [-3, -10, -13];
function trackPositive(num){
  return num>0;
}
console.log('Testing trackPositive function, should have an array with 1, 2, 3:', num10.filter(trackPositive));
console.log('Testing trackPositive function, should have an array with 1, 5, 9, 13, 17, 20:', num11.filter(trackPositive));
console.log('Testing trackPositive function, should have an empty array being there are no positive numbers in num13:', num13.filter(trackPositive));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
/*On Codewars I picked the Categorize New Member challenge. In this challenge
 I am helping with a new application form that will tell new members with category they will be place. 
 The two categories are senior or open. In order to be in the senior category you need to be 55+
 as well as have a handicap greater than 7. Else are you are in the open category.*/

function placement(age, handicap){
  if(age>=55 && handicap>7){
    return 'Senior';
  }
  return 'Open';
}
console.log('Below I am testing my placement function, We are taking in age and handicap to see where they should be placed in our "sports" club:')
console.log('You will be placed in', placement(59, 10));
console.log('You will be placed in', placement(85, 7));
console.log('You will be placed in', placement(55, 8));
console.log('You will be placed in', placement(18, 6));
console.log('You will be placed in', placement(30, 15));