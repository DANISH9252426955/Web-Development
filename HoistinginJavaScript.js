//How hoisting work in javaScript
console.log(city); //Output:- undefine
var city="jaipur";
console.log(city); //Output :- jaipur


//Hoisting with Function
greet(); //declaration function is fully hoisted

function greet(){
    console.log("Hello How are you");
    
}

//1 Hoisting and Different Variable Types (var, let, const)
//hoisting with var
console.log(rollNumber); // output:- undefine   because before  initilization we cannot access executed value
var rollNumber=872;
console.log(rollNumber); //output :- 872

//Hoisting with let and cosnt
//console.log(name);
let name="danish"; //Reference error we can't access before initilization
console.log(name);  //output :- danish

//console.log(country);
const country="india"; //Reference Error
console.log(country);

//We have a two type of function hoisting
//1.Function Declaration Hoisting is fully hoisted
sayHi();

function sayHi(){
    console.log("Hi welcome to jaipur");
}

//2.Function Expression (Not Fully hoisted)



// console.log(sum(5,6)); //Type error sum is not a function

var sum=function(a,b){
    return a+b;

}


//best practice for avoid Hoisting issue

//✅ 1. Always Declare Variables at the Top
let name1="danish";
console.log(name1);

let city1="Jaipur";
console.log(city1);

//✅ 2. Declare Functions Before Using Them

function add(a,b){
    return a+b;
};

console.log(add(5,5));


//✅ 3. Use Function Expressions When Necessary

const divide=(a,b) => a/b;

console.log(divide(10,5));  

//Q1: What will be the output of this code?
console.log(num); //undefine
var num = 10;
console.log(num); //10


//Q2: What will this code print?
console.log(language); // Refrence error cannot be access before initilization
let language = "Hindi";


// **Q3: Why do function expressions behave differently from function declarations?**

//✅ Answer:-- Function expressions are stored in variables, so only the variable is hoisted, not the function itself.


