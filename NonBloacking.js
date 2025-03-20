//Example: Blocking vs. Non-Blocking Code
//Example Sysnchronous
// console.log("Start");

// for (let i = 0; i < 5000000000; i++) { } //It will executed line by line 

// console.log("End");

//Example Asysnchronous
// console.log("Start");

// setTimeout(()=>{
//     console.log("Fetching Data");
    
// },2000);

// console.log("End");  // It does'not wait and continue executed next task


//Example: Understanding the Event Loop in Action

// console.log("Start");

// setTimeout(()=>{
//     console.log("Time Completed");
// },2000);

// console.log("End");



//How JavaScript Handles Asynchronous Tasks
//Callbacks (Traditional Method):----

// console.log("Start fetching data");

// function getData(Callbacks){
//     setTimeout(()=>{
//         console.log("Data Received from server");
//         Callbacks();
    
//     },3000);
// }

// getData(()=>{
//     console.log("Processing data.........");
    
// });


//Example:- Promises (Modern Alternative to Callbacks)

// console.log("Fetching data...");
// let fectData=new Promise((resolve, reject) => { 
//     setTimeout(() => {
//         resolve("Data Received From Server");
//     }, 3000);
// });


// fectData.then(data =>{
//     console.log(data);
//     console.log("Processing data...");
// });


//Example:-- Async/Await (Best for Readability)
console.log("Fetching data...");

async function getData() {
    let result=await new Promise((resolve)=>setTimeout(()=>resolve("Data Received from server"),3000));
    console.log(result);
    console.log("Processing data...");    
}

getData();
