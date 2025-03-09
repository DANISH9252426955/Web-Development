//Stack Example
let a=10;
let b=a; //create a new copy 
b=20;
console.log(a); //10
console.log(b); //20


//Heap Example
let example1 = {name : "danish"};
let example2 = example1; // refer a same copy object not  other object copy
example2.name="khan";
console.log(example1); //khan
console.log(example2); //khan



//Heap Example2
let demo1 = {name : "danish"};
let demo2 = {...demo1} // create a new object
demo2.name="khan";
console.log(demo1); //danish
console.log(demo2); //khan

//function Modifying Original Object
function updateUser(user){
    user.name="Ramesh";

}

let person={name:"danish"};

updateUser(person);
console.log(person.name);

// pass a copy instead

function updateUser1(user){
    let temp={...user}; //it used for new object copy
    temp.name="khan";
    return temp;

}

let man={name:"danish"};
let demo=updateUser1(man);
console.log(man.name);
console.log(demo.name); 

//Example Stack Memory in Action
function greetX(){
    let name="danish";  //store  stack memory
    let age="21"; //store stack memory

    console.log(name , age);

}

greetX();

//Example Heap Memory in Action

function newUser(){

    let newUser={name :"Aryan",age:22}; //store a heap memory
    return newUser;
}

let userDisply=newUser(); //store a memory
console.log(userDisply);