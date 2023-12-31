//Values and Variables............................................
//variable a box we can store a value . e.g. firstName is box and value is David
//Use cameCase
// never start first name with upper class letter e.g. let Person ="jones" always use lowercase person..

/* CODE BELOW COMMENTED OUT

let js = 'amazing';
      if (js === 'amazing') alert('Js is fun');  // shows on alert
console.log(50+60); //shows answer on console

let $function = 27;  //CAN USE $ or underscore_ to write this
console.log($function);

let firstName = "David";
console.log(firstName); 

let myFirstJob = "Footballer";
console.log(myFirstJob);

//Variables and Values Assignment
let Country = "Kenya";
let Continent = "Africa";
let Population = 54.99;
console.log(Country);
console.log(Continent);
console.log(Population);




//DATA TYPES................................................................
// JS automatically determines data type
//Every value is either an object looks like below:
let me = {
    name: "David"
}
//OR a Primitive below:
let secondName = "John";
let age = 28;

//1.NUMBER DATA TYPE
let age2 = 24;

//2.STRING DATA TYPE
let thirdName="luke";

//3.BOOLEAN DATA TYPE
let fullAge="true"; //this variable was changed below  line 56
let footballIsFun = true;
console.log(footballIsFun);

//4.UNDEFINED DATA TYPE: A VARIABLE WITH AN EMPTY VALUE.
let children;
console.log(children); //should show undefined
//5. NULL: Also means empty value

//Using tyopeof operator to fing what data type it is
console.log(typeof 25);  //will show as number on console
console.log(typeof secondName);  //will show as string on console
console.log(typeof true);  //will show as boolean on console



//Declared a variable above and then change the value of the variable
fullAge='I am 22 years old';
console.log(fullAge);



// DECLARING VARIABLES LET CONST VAR = ALWAYS USE CONST !!!
//Use LET keyword = declare variables that can change later
let myAge =24;
myAge=28;
//Use CONST keyword = declare variables that CAN NOT BE CHANGED LATER 
const fname = "joanne";
console.log(fname);
const birthYear= 1994;
console.log(birthYear);


//OPERATORS.........................................................................................
//Operators allows us to combine values or add together
//MATH OPERATORS...................
const now = 2022
const ageDave = now - 1994
const ageJoe = now + 1989
console.log(ageDave,ageJoe, 4**2);
//4**2 4 to the power of 2 4 x 4=16

const thirdName="don";
const fourthName ="Jim";
console.log(thirdName+"  "+ fourthName);

//ASSIGNMENT OPERATORS...............
let x = 10+7;
x +=10; //x=x+10=27
x*=4; //x=x *4 = 108
x++; // X=X+1
x--; //X=X-1
console.log (x);


//CODE CHALLENGE 1 MARK AND JOHN BMI 
let markWeight = 78;
let markHeight = 1.69;
const mFormula = markWeight/markHeight **2 ;
console.log(mFormula);

let johnWeight = 92;
let johnHeight = 1.95;
const jFormula = johnWeight/johnHeight **2;
console.log(jFormula);
//Boolean is Marks BMI greater than Johns. It shoukd be true in console
const markHigherBMI = mFormula > jFormula;
console.log(markHigherBMI);
//CODING CHALLENGE 1 COMPLETED*********************

//STRINGS AND TEMPLATE LITERALS...........................................................................
// TEMPLATE STRING 
//can use back ticks for any sort of string 
const firstName = 'Davie';
const job ="Software Engineer"
const myBirthYear = 1994;
const year = 2022;
const city ="Nairobi";
const country= "Kenya"
const hobby = "football"
//Easy way to write a sentence
const Davie = `I'm ${firstName}, a ${year-myBirthYear} year old ${job}, from ${city}, ${country} and I love ${hobby}!`;
console.log(Davie);


//multi-line strings use
console.log
(`String 
multiple 
lines`);

//if else statements , making decisions..................................................................
const sueAge= 15; // Changing age to reflect decision of if else statement
const sueNewAge =14;

if (sueAge>=18){
    console.log("She can buy a drink at the bar, yes 🥂")
}
else {
    const yearsLeft= 18-sueAge;
    console.log(`Sue is too young, to buy me a drink, wait another ${yearsLeft} years:)`)
};

EVERYTHING ABOVE COMMENTED OUT*/

//STOPPED LEARNING JS COURSE TO DO REACT JAVASCRIPT REFRESHER IN UDEMY

// JS REFERESHER COURSE - REACT.............................................................

//ARROW FUNCTIONS.........................
//Below the name is passed as an argument aka inside the brackets.
//Enter your own name to log it on the console see line
//1.Normal JS function e.g.......
function printMyName(name) {
  console.log(name);
}
printMyName("Dominic"); //This name prints out in the console

//2.Normal Const function no (arguments) e.g......
const printTwoName = () => {
  console.log("Davo");
};
printTwoName();

//3.Normal const - (Two arguments)
const printMyDetails = (name1, age1) => {
  console.log(name1, age1);
};
printMyDetails("Kevin", 35);

//4.Normal const - (one argument)
const multiply = (number) => {
  return number * 2;
};
console.log(multiply(5)); //5 x 2 =10 shown in console

//CLASSES............................................................................
/*ELI5 = Classes are just special instructions. Special class called HUMAN
Constructors = workers who use special instructions to create the special classes
*/
//Classes are a group of objects.
//e,g, Car is a class and its objects are :colour,registration,type of car.
//Methods-methods which car uses: drives , reverses and turns
//Classes are used by react to create components.

//1.EXAMPLE
// properties of a class are added using a "constructor" keyword
// "this" keyword used to set up properties of the class. so "name" is a property.
//printmy2name is the method we used
//use class to store instance in a constant with "new person"

//classes can also inherit. e.g. Person class inherits the human
/*Special class is Human. This Human has special instructions to create it
1.Constructor = is the special worker who uses the special instructions to create the human
2.Constructor gives the new human a gender of 'male' by default
*/
class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log(this.gender);
  }
}
class Person extends Human {
  constructor() {
    super(); // calls the Human constructor above and asks it to create a new human with default gender 'male'
    this.name = "john"; // the person constructor now adds john as the new humans name.
  }
  printMy2Name() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMy2Name();
person.printGender();

//The above should show the name "John" and gender "male" in the console.
//Classes,Propreties & Methors.........................
//Properties are like variables attached to classes/objects
//Methods are like functions attached to classes/objects

//spread & Rest operator
///1.SPREAD operator "..." the three dots to add more to an array(list) or objects
//1.Example Array
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6];
console.log(newNumbers);
//1.Example Objects
const person2 = {
  name: "jake",
};
//Below takes the old person and add to newperson
const newPerson2 = {
  ...person2,
  age: 25,
  size: 10,
  DOB: "28/08/1997",
};
console.log(newPerson2);

///2.REST operator ; CHECK THIS MORE IN JS FULL COURSE

//JS FUNDAMENTALS BASIC OPERATORS ***********
//Variables and Values Assignment
let country = "Kenya";
let continent = "Africa";
let population = 54.99;
let language = "Swahili";
console.log(country);
console.log(continent);
console.log(population);

const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);

let x = 5;
let z = 7;
console.log(x > z); //will say true or false
console.log(z >= x); // will say true or false

/*Template literal string - this helps insert variables directly into sentence, 
 use backticks and ${} , no need for + to add stringd together */
const fName = "david";
const job = "mechanic";
const birthYear = 1994;
const yearNow = 2023;

const david = ` I'm ${fName} a ${yearNow - birthYear} years old ${job} `;
console.log(david);

console.log(`this is testing 
a new
line, ok mate,
with template strings  `);

//if /else statements video = 18 udemy...........
const age5 = 10;
const isOldEnough = age5 >= 18;

if (age5 >= 18) {
  console.log("you are old enough");
} else {
  console.log("you are not old enough, sorry");
}

const myBirthYear = 2004;

let century;
if (myBirthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//coding 2 challenge 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn} !`);
} else {
  console.log(`John's BMI ${BMIJohn}  is higher than Mark's ${BMIMark} !`);
}
//CODING CHALLENGE 2 COMPLETED********************

//Challenge 3 lecture 18,23****************************************************
//*****driving example=if/else statements****
const Page = 24;
if (Page > 18) {
  console.log("Paige is able to drive a car"); // WILL SHOW IN CONSOLE
} else {
  const yearsToDrive = 18 - Page;
  console.log(
    `Paige is not able to drive yet, she needs to wait ${yearsToDrive} years ;) `
  );
}
/*BOOLEAN LOGIC: AND, OR, NOT! operators -class 23 */
//e.g. jon has drivers license AND good vision = TRUE WHEN ALL ARE TRUE
//e.g. jon has drivers license OR good vision = TRUE WHEN ONE IS TRUE
// !NOT = just inverts logical value of the variable

// age = 20
//A: age is >= 25  FALSE
//B: age is <= 30  TRUE

//OPERATORS
//(!NOT) NOT!A FALSE therefore TRUE - remember Not is just the invert of the logical value of the variable
//(AND) A=FALSE,B=TRUE  FALSE because one is false
//(OR) A=FALSE,B=TRUE   TRUE because one is true
//(OR) A=FALSE,!B= false  A is false and B is true but NOT !B is false, so FALSE = FALSE

//CHALLENGE 3 INFO
/*There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.*/

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

/*2. Compare the team's average scores to determine the winner of the competition, and print to the console:
"Dolphins win the trophy" if Dolphins win, or
"Koalas win the trophy" if Koalas win, or
"Both win the trophy" if their average scores are equal.
TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110. */
if (scoreDolphins > scoreKoalas) {
  console.log(
    `Dolphins ${scoreDolphins} score is higher than Koalas ${scoreKoalas} score, so Dolphins win !`
  );
} else if (scoreDolphins < scoreKoalas) {
  console.log(
    `Koalas ${scoreKoalas} score is higher than Dolphins ${scoreDolphins} score, so Koalas win !`
  );
} else {
  console.log(
    "Both teams have the same average score, so they both win the trophy!"
  );
}

/*SWITCH statement - CLASS 26
allows you to execute different blocks of code based on different conditions. 
It provides a more concise way to write multiple 
if...else statements when you have multiple cases to evaluate.*/
const fruit = "orange";

switch (fruit) {
  case "apple":
    console.log("It's an apple.");
    break;
  case "banana":
    console.log("It's a banana.");
    break;
  case "orange":
    console.log("It's an orange.");
    break;
  default:
    console.log("It's an unknown fruit.");
    break;
}

/* STATEMENTS & EXPRESSIONS-27 */
//JS EXPECTS statements & expressions in different places,
//in a template literal we can only have expressions and not statements like "if statements"

/*CONDITIONAL OPERATOR '?' */
//Allows us to write something similar to if/else block but in one line
//Below says if Peters age > 18 log i like alcohol ELSE':' log water
const agePeter = 25;
agePeter >= 18
  ? console.log("I like alcohol🍹")
  : console.log("I like to drink water");
// shows in CONSOLE I LIKE ALCOHOL
//OR DO IT THIS WAY
const drink = agePeter >= 18 ? " alcohol🍹" : "water";
console.log(drink);
// shows in CONSOLE  ALCOHOL
//OR DO IT THIS WAY WITH TEMPLATE LITERAL
console.log(`I like to drink ${agePeter >= 18 ? " alcohol🍹" : "water"}`);
// shows in CONSOLE I LIKE TO DRINK ALCOHOL

//JAVASCRIPT FUNDAMENTALS PART 2 ***************************************************
//FUNCTIONS  *****************************
// Functions allow us to reuse code blocks
//They satify the principle DRY - dont repeat yourself because they are reuseable code blocks.
function mycar() {
  console.log("my car is a mercedes");
}
//calling the function, invoking the function, running the function
mycar(); // this logs the statement
mycar(); // logs again

//Parameters are like variables e.g. BMW and Mercedes they are like inputs.......
//1.
function myCars(BMW, Mercedes) {
  console.log(BMW, Mercedes);
  const davesCars = `Dave has ${BMW} BMWs and ${Mercedes} Mercedes Benz cars, in his garage`;
  return davesCars;
}

//2.
myCars(10, 5); // assigning the variables bmw=10 mercedes=5 their values aka ARGUMENTS
//console.log((BMW, Mercedes)) line 355 logs out these values alone ... 10 , 5
//3
const allCars = myCars(10, 5); // put in variable called 'allCars'
console.log(allCars); // shows 'davesCars' string with values aka arguments in console
console.log(myCars(10, 5)); // ALSO shows 'davesCars' string with values aka arguments

//4
//using the same function with different values for the variables
const inDavidsGarage = myCars(6, 8);
console.log(inDavidsGarage);

//Function declarations vs Expressions...
//function declaration = function byitself
function myAge1(yearOfBirth) {
  return 2024 - yearOfBirth;
}
const myAgeAA = myAge1(1994);
console.log(myAgeAA); // logs out my age in 2024

//function expression = function with a const variable starting it.
//e.g.1
const the24Age = function (yearOfBirth) {
  const thisAge = 2024 - yearOfBirth;
  return `I will be ${thisAge} years old next year `;
};

console.log(the24Age(1994)); // can console.log the function or
// const myAgeBB = the24Age(1994);// can show it this way
// console.log(myAgeBB);

//e.g.2
const myTeam = function (Team) {
  return Team + "  " + "is better than mancity";
};
const theBestTeam = myTeam("manU");
console.log(theBestTeam); // shows string manU is better than mancity

//Arrow functions - faster and easier to write code
// returns code implicitly ,no need for curly braces
const johnsAge = (birthYear) => 2023 - birthYear;
const johnsNowAge = johnsAge(1994);
console.log(johnsNowAge);

const yearUntilRetire = (birthYear) => {
  const Dage = 2023 - birthYear;
  const retirement = 65 - Dage;
  return retirement;
};

const davesRetirement = yearUntilRetire(1994);
console.log(davesRetirement);

const yearsToMarry = (birthYear, lastName) => {
  const DVage = 2023 - birthYear;
  const marryBy = 39 - DVage;
  return `${lastName} should get married in ${marryBy} years time`;
};

console.log(yearsToMarry(1994, "smith"));
console.log(yearsToMarry(1997, "jon snow"));

//functions calling other functions.........
// function myCars calls the 'makeCar'
function makeCar(engine) {
  return engine * 5;
}

function myCars(clio, punto) {
  const renaultEngine = makeCar(clio);
  const fiatEngine = makeCar(punto);
  const davesCars = `Dave has ${renaultEngine} Engines for Renault and 
  ${fiatEngine} Engines for Fiat in his garage`;
  return davesCars;
}

console.log(myCars(3, 5));

/* ARRAYS
 - arrays use []
 arrays start from 0
 array is not a primitive value, it can always be changed, 
 e,g, const friends - the array can be mutated,but enitire array cannot be changed 
*/

//ARRAY 1 E.G.
const friends = ["jon", "mike", "alex"];
console.log(friends);

console.log(friends[2]); //shows the friend in position 2. arrays start from 0
console.log(friends.length); // 3 - shows number of elements in array!
console.log(friends[friends.length - 1]); // length of array is 3 elements -1 = 2 elements
// this now leaves friends[2]= which is alex, as he is position 2 in array

friends[1] = "jay";
console.log(friends); // changes mike name to jay in console

//ARRAY 2 E.G.
//array can hold different data types and values
// add friends array in this davido array
const firstName1 = "David";
const davidioJob = "Software Engineer";
const davidio = [firstName1, 2023 - 1994, davidioJob, friends];
console.log(davidio);

//Array methods*********************************************************
// good for structured/ordered data!!

//Add elements **************************************
//push method - is a method to add this name to the array .
const friends1 = ["jon", "mike", "alex"];
friends1.push("james");
console.log(friends1);
//unshift method - adds elements to begining of array
friends1.unshift("luke");
console.log(friends1);

//Remove elements **************************************
//pop method
friends1.pop(); // pop is a method to remove the last element from array.
console.log(friends1); //takes out james
//shift
friends1.shift(); // removes element from beginning of array
console.log(friends1);
//indexof -tells you what position an element is
console.log(friends1.indexOf("alex")); // alex is position 2
//includes - find out if element is included in array
console.log(friends1.includes("dom")); // false,there is no dom in array

if (friends1.includes("jon")) {
  console.log("You have a friend named jon");
}

//OBJECTS*******************************************************************************************
// undefined = trying to access a property that doesnt exist
// good for unstructured data!!
const david2 = {
  firstName2: "dave",
  lastName2: "Romeo",
  age: 23,
  job: "engineer",
  hisFriends: ["mike", "mat", "jim"],
};

//dot notations vs bracket notation******************************
//dot notation
//dot notation - uses real property name and does not allow anything inside.
console.log(david2.lastName2);

//brackets
//only use when computing a property name , like changing
// can put any expression inside brackets
console.log(david2["age"]); // this is bracket notation

/*Prompts has been commented out
//prompts
//prompts come up on the screen:

const interestedIn = prompt(
  "what do you want to know about Dave? firstName2 , age , job , hisFriends "
);
console.log(david2[interestedIn]); // brackets notation

//this brings the prmopt and asks the question?
//when user types job e.g. console should show engineer as uses 'david2' object

// if else statement to get user to enter a wrong value. e.g. location in prompt
//will then show the wrong request response in console
if (david2[interestedIn]) {
  console.log(david2[interestedIn]);
} else console.log("wrong request, please choose what you would like to know");
*/
//Adding to the david2 object
david2.location = "london town";
david2["instagram"] = "davidTheDon";
console.log(david2);

/* key value pairs
functions are just another type of value
we can create a key value pair that the value is a function,
therefore we can add functions to objects
-used a function declaration and not a function expression
- any function attached to an object is called a method
A method is a property, a property that holds a function value
calcAge is a function value   */
const dave1 = {
  firstName: "Dave",
  lastName: "Romeo",
  age: 23,
  job: "engineer",
  hisFriends: ["Mike", "Mat", "Jim"],
  hasDriversLicense: true,

  calcMyAge: function (yearBirth) {
    return 2024 - yearBirth;
  },
};

console.log(dave1.calcMyAge(1998)); //dot notation shows 26
console.log(dave1["calcMyAge"](1998)); // brackets shows 26

//this -keyword*******************************************
// this- helps us too not include a parameter in the function for yearBirth
//dont need age in function brackets in console.log
const dave2 = {
  firstName: "Dave",
  lastName: "Romeo",
  age: 23,
  yearBirth: 1997,
  job: "engineer",
  hisFriends: ["Mike", "Mat", "Jim"],
  hasDriversLicense: true,

  calcMyAge: function () {
    console.log(this);
    return 2024 - this.yearBirth;
  },
};

console.log(dave2.calcMyAge()); //dot notation shows 27
console.log(dave2["calcMyAge"](1998)); // brackets shows 27

/* FOR LOOP****************************************************
How to write a for loop :
for (starting from where; how long it should last (CONDITION); increasing or decreasing){
console.log(etc....)
}


//Lifting weights example
//rep = repitition , 1 - first repitions
//first condition create a variable(let rep )
//for loop keeps running while condition is true.
//loop is 1 and  stops at 10, rep++ rep is increased by 1  to 10
// for loop first needs it conditions, starts from 1, goes only to 10 and then increases by 1.
//${rep} = brings the sentence 10 times*/
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights is cool repetition ${rep}`);
}
//the for loop shows the sentence and number 10 next to it
// can change 'rep = 1; rep <= 10' to different numbers.

//Looping arrays********
// i - is just a traditional counter name
// 0 - array is 0 based when it comes to reading elements out of array
//0 - is the first element that we want to start from
//i++ - increases by 1, i < 6;- brings elements less than 6 only
const daveArray = [
  "dave",
  "jenkins",
  2023 - 1997,
  "chief engineer",
  ["jon", "mike", "jane", "dom"],
  "mercedes",
];
// in array there are 4 elements so array can only go up to 4
for (let i = 0; i < 6; i++) {
  console.log(daveArray[i]);
}

//looping backwards
for (let i = daveArray.length - 1; i >= 0; i--) {
  console.log(daveArray[i]);
}

// using template literals in for loop
for (let exercise = 1; exercise < 5; exercise++) {
  console.log(`----starting new exercise ${exercise}`);
}
// shows line x4 times in console as its less than 5

/*WHILE LOOP 
while loop because it will run when condition is true 
written as  while (condition)
WHILE loop is more versatile then for loop, all it needs is a condition for it to stay running*/
for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weights is cool repetition ${rep}`);
}

let rep = 1;
while (rep <= 5) {
  console.log(`WHILE: Lifting weights is cool repetition ${rep}`);
  rep++;
}

//no counter example rolling dice based on a variable
//math.random will bring a number between 0 and 1.
//math.trunc removes decimal in answer
// while loops do not need a counter
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(` you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("loop is abut to end....");
}
/**
 very important videos to watch: roadmap for each section
Pathway 2: only very important parts

 HOW TO THINK LIKE A DEVELOPER 
 E.G.
 we build theremometers.
Task: given an array of temperatures of one day,
calculate the temperature altitude.may be sensor error.

const temparatures = [1,4,6,-6,-2,8,'error',17,24,23,-7]

1)First Understand the problem 



VIDEO AT 17:02 USING GOOGLE STACKOVERFLOW
*/
