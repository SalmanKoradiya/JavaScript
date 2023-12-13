'use strict';

// Strict mode is important 

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;

// if (hasDriversLicense) console.log("I can Drive")

// const interface = "Audio" //Variable name reserved for future

// const private = 12; // variable name reserved or maybe in use in future check the list .

// Try above stuffs and commet it to see changes


// Functions

// declaring a function 
// function logger(){
//     console.log("My name is jonas")
// }

// // invoking a function calling a function or running a function
// logger();
// logger();

function fruitProccesser(apples, oranges){
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProccesser(5, 0)
console.log(appleJuice)
// console.log(fruitProccesser(6, 2))

// const appleOrangeJuice = fruitProccesser(2, 5)
// console.log(appleOrangeJuice)

// Function Declration vs Expresssion

function calAge1(birthYear){
    return 2037 - birthYear;
}

const age1 = calAge1(1991);
console.log(age1);


// Function expression 

const calAge2 = function (birthYear){ // anonymous function
    return 2037 - birthYear
}

const age2 = calAge2(1991);

console.log(age1, age2)


// Arrow Functions added in ES6
// arrow function return values implicitly without writing explicitly with return keywords
// usefull for oneliner 
// for more then one parameter we need to wrap it up in parenthises 
// this keyword we cant use in this so function dec and exp better there
const calage3 = birthYear => 2037 - birthYear;
const age3 = calage3(1991)
console.log(age3);


const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}`
}

console.log(yearUntilRetirement(1991, 'Jonas'))
console.log(yearUntilRetirement(1995, 'Bob'))


// Function calling diffrent functions

function cutFruitPices(fruit){
    return fruit * 4;
}

function fruitProccesser(apples, oranges){
    const applePieces = cutFruitPices(apples);
    const orangePieces = cutFruitPices(oranges);
    const juice = `Juice with ${applePieces} pices of apples and ${orangePieces} pices of oranges`;
    return juice;
}

console.log(fruitProccesser(2, 3))

// Reviewing Functions

// CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.


//  Answer

/* Write your code below. Good luck! 🙂 */

const calcAverage = (score1, score2, score3) => {
    const average = (score1 + score2 + score3) / 3;
    return average
    
}

let scoreDolphins = calcAverage(44,23,71)
let scoreKoalas = calcAverage(65,54,49)

const checkWinner = (avrDolphines, avrKoalas) => {
    if (avrDolphines > avrKoalas && avrDolphines > avrKoalas * 2) {
        console.log(`Dolphines win (${avrDolphines} vs. ${avrKoalas})`)
    } else if (avrKoalas > avrDolphines && avrKoalas > avrDolphines * 2) {
        console.log(`Koalas win (${avrKoalas} vs. ${avrDolphines})`) 
    } else {
        console.log("NO team wins...")
    }
}

checkWinner(scoreDolphins, scoreKoalas);

// Introduction to Arrays
// const we used because only in primitive its imutable 
// but in non primitive like object array its mutable like we can chnage the value
const friends = ['Mikael', 'Steven', 'Peter']; // Literal Syntax
console.log(friends); 
console.log(friends[0]); // index
console.log(friends.length); // Lenght function
console.log(friends[friends.length - 1]); // Expresion
friends[2] = 'jay'; // We replaced the index 2 with other value
console.log(friends)
// friends = ['Bob', 'Alice'] // We cant change whole together (Needed cleareance)

const years = new Array(1991,1984,2008,2020);
console.log(years[0])

const fristName ='Jonas'
const jonas = [fristName, 'Developer', 2035 - 1997 , friends];
console.log(jonas)


// Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear
}

const years1 = [1990, 1967, 2002, 2010, 2018];
const age0 = calcAge(years1[0]);
const ages1 = calcAge(years1[1]);
const ages2 = calcAge(years1[2]);
const ages3 = calcAge(years[years.length - 1])
console.log(age0,ages1,ages2)

const ages = [calcAge(years1[0]), calcAge(years1[1]), calcAge(years1[2]), calcAge(years[years.length - 1])];

console.log(ages)

// Basic Array Operations (Methods)

// push function addes content to the end of the array
const friends1 = ['Mikael', 'Peter', 'Salman']
console.log(friends1)
friends1.push('Jay') // push() is a function and also return something which is lenght of array
const newlength = friends1.push('ABC')
console.log(newlength) // we can see the output in the console
console.log(friends1)

// unshift method we can add content at the bigning of the array
// unshift()
friends1.unshift('Ali')
console.log(friends1)

// rmeove last elemnt from the array POP method pop() it doesnt take any arrgument
// it returns the value we removed so if we want to capture we can store it in a variable then run the function
const popped = friends1.pop()
console.log(popped)
console.log(friends1)
friends1.pop()
console.log(friends1)


// shift() Methods returns value we removed if we needed
const shift = friends1.shift() // shift method remove first element in array list
console.log(shift) // We captured what was removed
console.log(friends1)

// indexOf Method returns the index number of provided value
// includes() Checks strict equality check it doesnt do ttype coercion
console.log(friends1.indexOf('Salman')) // We get index value
console.log(friends1.includes('Salman')) // We get boolean value
console.log(friends1.includes('Bob')) // We get boolean value

if (friends1.includes('Salman')){
    console.log('You have a friend Salman')
}


// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

// Answer

// Standard:

const calcTips = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
 
const bills1 = [125, 555, 44];
const tips1 = [calcTips(bills1[0]), calcTips(bills1[1]), calcTips(bills1[2])];
 
console.log(bills1, tips1);
// You can also use an arrow function for calcTip if you prefer that

const calcTips1 = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;


// With Bonus:

const calcTip2 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
 
const bills = [125, 555, 44];
const tips = [calcTip2(bills[0]), calcTip2(bills[1]), calcTip2(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
 
console.log(bills, tips, totals);


// Introduction to Objects
// Object is Key Value pairs seprated by commas
// mikael is object name
// other are properties (Key: Value)
const mikael = {
    firstName: 'Mikael',
    lastName: 'Koradiya',
    age: 2023 - 1997,
    job: 'Developer',
    friendsName: ['Mikael', 'Salman', 'Jonas']
}

// Dot notation bracket notation retives data

console.log(mikael.lastName);
console.log(mikael['lastName']);

const nameKey = 'Name';
console.log(mikael['first' + nameKey]);
console.log(mikael['last' + nameKey]);

// const interestedIn = prompt('Please select any one : firstName , lastName , age , job , friendsName');
// console.log(mikael[interestedIn])

// if (mikael[interestedIn]) {
//     console.log(mikael[interestedIn]);
// } else {
//     console.log('Wrong request please select any one : firstName , lastName , age , job , friendsName')
// }

mikael.location = 'India';
mikael['twitter'] = '@mikael';

console.log(mikael);

// Challenge

// "Mikael has 3 friends , and his best friend is called Salman"
// Arrary issues need to understand better
// console.log(` ${mikael['firstName']} has ${friends.length}, and his best friend is called ${mikael[friendsName[1]]}`)

const salman = {
    firstName: 'Salman',
    lastName: 'Koradiya',
    birthYear: 1991,
    job: 'Developer',
    colleagues: ['Anas', 'Munaf', 'Suhail', 'Rehan'],
    hasDriversLicences: true,

    // calcAge: function () {
    //     return 2037 - this.birthYear;
    // },

    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age
    },

    getSummary: function (){
        return `${salman.firstName} is a ${salman.calcAge()} years old ${salman.job} , and has ${this.hasDriversLicences ?  'a' : 'no'} driver's licence`
    }
};

console.log(salman.calcAge())
console.log(salman.age)
console.log(salman['calcAge'](salman.birthYear)); // [] Bracket Notation remeber '' quotes (executuion)
console.log(salman.calcAge(salman.birthYear));  // . dot Notation  remeber . (Exectution)

console.log(salman.calcAge())
console.log(salman.age)

// Challenge

// Salman is a 46 years old Developer, and has a driver's licence

console.log(`${salman.firstName} is a ${salman.age} years old ${salman.job} , and has ${salman.hasDriversLicences} driver's licence`)

console.log(salman.getSummary())

// CHALLENGE #3
// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

// Answer

/* Write your code below. Good luck! 🙂 */

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    
    calcBMI: function () {
        mark.bmi = mark.mass / (mark.height * mark.height)
        return mark.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    
    calcBMI: function () {
        john.bmi = john.mass / (john.height * john.height)
        return john.bmi
    }
}

console.log(mark.calcBMI())
console.log(john.calcBMI())

if (mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName} 's ${john.bmi}`) ;
}else if (john.bmi > mark.bmi){
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName} 's ${mark.bmi}`);
}
 
// Loops 
////Initialization//Condition//increse counter value by one
for (let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weight repition ${rep}`)
}

// Looping Arrrays , Breaking And Continue

const jonasArray = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'teacher',
    ['Mikael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonasArray.length ; i++){
    console.log(jonasArray[i], typeof(jonasArray[i]))
    // types[i] = typeof jonas[i]
    types.push(typeof jonas[i])
}

console.log(types)

const year = [1991, 2007, 1969, 2020];
// const newYears = [];

// for (let i = 0; i < year.length; i++){
//     newYears.push(year[i])
// }
// console.log(newYears)

const agess = [];

for (let i = 0 ; i < year.length; i++){
    // agess.push(2037 - year[i])
    agess.push(2037 - year[i])
}

console.log(agess)

// Continue and Break (Needed to Wrok more on this one)

for (let i = 0; i < jonasArray.length ; i++){
    if (jonas[i] !== 'String') continue;

    types.push(typeof jonas[i])
}

// Backwords loops 

const jonasArrays = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'teacher',
    ['Mikael', 'Peter', 'Steven'],
    true
];

for (let i = jonasArrays.length -1 ; i >= 0; i--){
    console.log(i,jonasArrays[i])
}

// own Try Needed Checking
// const num = [1,2,3,4,5,6]
// const num1 = []
// for (let i = num.length -1 ; i >= 0 ; i--){
//     console.log(i, num[i])
//     num1.push([i], typeof[i])
//     console.log(num1)

// }

// console.log(num1)

// Lopp inside a loop

// for (let i = 0 ; i < 5 ; i++){
//     console.log("I did 1 exercice")
//     for(let x = 0 ; x < 3 ; x++){
//         console.log("I did 1 Exercise 3 time")
//     }
// }

for (let exercise = 1 ; exercise < 4 ; exercise++){
    console.log(`-------Starting exercise ${exercise}`)

    for (let rep = 1 ; rep < 6 ; rep++){
        console.log(`Lifting Weight repetition ${rep}`)
    }
}

// The While Loops

for (let rep = 1 ; rep < 11 ; rep++){
    console.log(`Lifting weight repitation ${rep}`)
}

let rep = 1; // Initial value of rep
while (rep <= 10) { //Condition
    console.log(`While : Lifting weight repitation ${rep}`) // template literals with rep count
    rep++ // increment
}

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You Rolled a dice and got :${dice}`)
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end')
// }


// CHALLENGE #4
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:

// Create an array called bills containing all 10 test bill values.

// Create empty arrays for the tips and the totals (tips and totals)

// Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



// BONUS:

// Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

// First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

// To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

// Call the function with the totals array.

// Answer 

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   }
  
//   /* Write your code below. Good luck! 🙂 */
  
//   let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
//   let tips = [];
//   let totals = [];
  
  
//   for(let i = 0; i < bills.length; i++){
//       tips.push(calcTip(bills[i]));
//       totals.push(bills[i] + tips[i])
//   }
//   const calcAverage = function (arr) {
//   let sum = 0;
//       for (let i = 0 ; i < arr.length ; i++){
//         sum = sum + arr[i]
//       }
      
//       return sum / arr.length;
      
//   }
  
//   console.log(calcAverage(totals))

