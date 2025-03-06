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
