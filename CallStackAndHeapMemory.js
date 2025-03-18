//Its Example for call stack in js
function first(){
    console.log("First Function Started");
    second();
    console.log("First Function Ended");
}

function second(){
    console.log("Second Function Started");
    third();
    
    console.log("Second Function Ended");
}

function third(){
    console.log("Third Function Started and Ended");
    
}
first();

//Example how Heap Memory work

let name="Danish"; //Store in heap
let user={name:"danish",city:"jaipur"};//Store in heap

function detail(){
    let greet="Hello "+user.name; //Store in temporary memory in heap
    console.log(greet);
}

detail();


