//Example: Stack Overflow in JavaScript

function callMe(){
    console.log("Calling");
    callMe();  //This function never stope  
}

//callMe();


//Example:--Fixing Stack Overflow with a Base Condition

function callMee(count){
    if(count===6) return;
    console.log("Calling:-"+count);
    callMee(count + 1);
}

callMee(1);


//Example: Memory Leak in JavaScript

let user=[];

function addUser(name){
    user.push({name});
}

setInterval(()=> addUser("Danish"),1000);



//Example:- Fixing Memory Leaks by Removing Unused Data

let user1=[];

function userDetail(name){
    if(user1.length >10){ // if name add more ar length of user shift method delete them
        user1.shift();
    }
    user1.push({name});
}

setInterval(()=>userDetail("Danish khan"),1000);

//Example Understanding Execution Context Errors
//Example: Undefined Variable Error
//console.log(city); //ReferenceError: Cannot access 'city' before initialization
let city="jaipur";

//Example Fixing Execution Context Errors
let city1="jaipur";
console.log(city1); // After initialize you can access


//Example 1. Using console.log() for Debugging
let amount=1000;
console.log("The price before Discount:- "+amount);
amount-=500;
console.log("The price After Discount:- "+amount);

//Example 2. Using try...catch to Handle Errors
try{
    let result=10/0;
    console.log(result);
}catch(error){

    console.log("Error:-"+error.massage); //Infinity
};

//Example 3. Using debugger for Step-by-Step Analysis

let salary=50000;
debugger; //stopr execution here if error in this code 
salary+=10000;
console.log("The Final Salary is:- "+salary);

