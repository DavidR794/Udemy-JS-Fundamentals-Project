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


//CODE CHALLENGE MARK AND JOHN BMI
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

//CLASSES.........................
//Classes are a group of objects.
//e,g, Car is a class and its objects are :colour,registration,type of car.
//Methods-methods which car uses: drives , reverses and turns
//Classes are used by react to create components.

//1.EXAMPLE
// properties of a class are added using a "constructor" keyword
// "this" keyword used to set up propererities of the class. so "name" is a proprerty.
//printmy2name is the method we used
//use class to store instance in a constant with "new person"

//classes can also inherit. e.g. Person class inherits the human
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
    super();
    this.name = "john";
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
console.log(x > z);
console.log(z >= x);
