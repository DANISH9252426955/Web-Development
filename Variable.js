//javaScript Variable Declaration Sysntex
var oldVariable="i am using var";
let newVariable="i am using let";
const fixedVariable="i am using const";


//Memory Allocattion
let demo="danish";//Store in a Stack Memory
let user={name:"danish"};//Store in a Heap Memory


//Lexical Scope
let globalVar="How Are you";
{
    let blockVar="I am Block Variable you can access only within the block";
    console.log(blockVar);
}
console.log(blockVar);//It will genrate Error because you can not access outside Block variable 

//Variable Hoisting in js
console.log(x);
var x="danish";

console.log(y);
let y="log in";


// Var is a function scope and avoid block
if (true) {
    var message = "Hello";
}
console.log(message); //it will be run

//let is block scope and only working inside a block
if (true) {
    let food = "Pizza";
}
console.log(food); //It will genrate error

//
