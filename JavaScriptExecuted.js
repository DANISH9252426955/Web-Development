//Example Single Threaded
console.log("Start");  // Line 1
console.log("Processing...");  // Line 2
console.log("End");  // Line

//Example of Sysnchronous mens it can executed 1 task at the one time

console.log("1Task Start");
let a=5,b=3;
let sum=a+b;
console.log("The Sum is:-"+sum);
console.log("1 Task is completed");

//Example of Asysnchronous it does not wait it continue executed the line by line
console.log("Start");
setTimeout(()=>{
    console.log("Fetching user data........");
},1000);

console.log("End");

//Asynchronous Real World Example

console.log("Order Received");

setTimeout(()=>{
console.log("Cooking Complet");
},2000);

console.log("Please Taking Next Order");

//Real World Scenario A banking system

console.log("Check Account Balance");

setTimeout(()=>{
console.log("Money Transaction  SuccesFully");
},3000);

console.log("You can do next Transection");






