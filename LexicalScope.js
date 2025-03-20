//Example 1: How lexical scope work
let country="india"; //global scope

function state(){
    let city="jaipur";
    console.log(city); //local scope
    console.log(country); //global scope accessable anywhere
    function area(){
        let street="shastri nagar";
        console.log(street); //block of scope
        console.log(city); //accesable (parents scope)
        console.log(country); //globla scope
      
    }
    
area();
//console.log(street); //Error: street is not defined (Inner Scope)  
}
state();
//console.log(city); //error city is not define (function scope)


//Example 2: Scope Chain in Action
let globalVar="global Stage";

function firstLevel(){
    let firtsVar="First Stage";

    function secondLevel(){
        let secondVar="Second Stage";
        console.log(globalVar); //found in global scope
        console.log(firtsVar); //found in parents scope
        console.log(secondVar);  //found in local scope
    }

    secondLevel();
   // console.log(secondVar); // error second var is not define(inner scope)
}

firstLevel();

//console.log(firtsVar); //error firstvar  is not define (function scope)



//3. Block Scope with let and const

if(true){
    let age="21";
    const city="jaipur";
    var contInfo=9252;
    console.log(age);
    console.log(city); // let and const we can access only inside the block  

}

//console.log(age); //we can't access age outside the bloack
//console.log(city); // //we can't access city outside the bloack

console.log(contInfo);


//4. Common Mistakes and How to Avoid Them
//Mistake 1: Assuming Global Variables are Always Safe
//Bad practice
var company="tata";

function changeCompany(){
    company="Infosys";  //Modifieng a global variable
}
changeCompany();
console.log(company); //unexepted Output : "infosys"


//Good Practice

let company1="TCS";
function changeCompany1(){
   let newCompany="infosys"; //local scope 
   console.log(newCompany);
   
}

changeCompany1();
console.log(company1); //Still TCS


//Good practice

function testScope(){
    let name="ravi";
    console.log(name);
}

testScope();
//console.log(name); //error it not define 


//Mistake 3: Misusing Block Scope
//bad practice
if(true){
    var secret="Hidden";
    console.log(secret);
}

console.log(secret); //var does'not respect block of scope


//good practice

if(true){
    let secret1="Hiddine";
}

//console.log(secret1); // let is a bloack of scope 
//Q1: What will be the output of this code?
function outer(){
    let city="Banglore";
    function inner(){
        console.log(city);
    }

    return inner;
}

let result=outer();
result(); //output :--- Bangalore

//Q2: What happens if two functions have the same variable name?

let fruit="Mango";

function first(){
    let fruit="Apple";
    console.log(fruit);   
};

function second(){
    console.log(fruit);
}

first();  //Apple 
second(); //Mango



