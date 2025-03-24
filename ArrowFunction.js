//Simple Exmple of Arrow Function

const greet = () =>{
    console.log("Hello World!");
}

greet();

// Traditional way for using funnction
function userName(user) {
    console.log(`Welcome to ${user}`);
};

const feedBack=function (name){
    console.log(`Good FeedBack for user ${name}`);
}
userName("Demo")
feedBack("Nivesh");

// Arrow Function makes more readable and way of using Arraow function
//Example 1
const greet1=(name) =>{
    console.log("Hwllo user",name);
}

greet1("Sourabh");

//Example 2
const greet2 = name =>{
    console.log("Hwllo user",name);
};

greet2("aadil");


//Example 3

const square = n => n * n;

const result=square(5);
console.log(result);


//Example Traditional function VS Arrow function
//traditional
function deliverOrder(customer){
    console.log("Delivaring to",customer);
}

deliverOrder("Rehan");
//Arrow Function

const deliverOrder1 = customer =>{
    console.log("Delivaring to",customer);
}
deliverOrder1("Sourabh");
//Example to Understand This Clearly

function clock(){
    this.time=0;

    setInterval(function(){
        this.time++;
        console.log(this.time); //it does.not invoke parents this in inner function
    },1000);
};

const myClock1=new  clock();


function Clock() {
    this.time = 0;

    setInterval(() => {
        this.time++;
        console.log(this.time); //it invoke parents  this in inner function 
    }, 1000);
}

const myClock=new Clock();


//Using object in this keyword

const personOne={
    name:"Danish",
    greet:() =>{
        console.log("Hello",this.name);   //Arrow function doe,not have own this it refere to parents scope
    },
};

personOne.greet();

const personSecond={
    name:"Rahul",
    greet:function() {
        console.log("Hello",this.name);  //The normal function has own itself this keyword      
    },
};
personSecond.greet();

//Traditional Function
function leble(){
    this.count=0;

    return function () {
        this.count++;
        console.log("Hello!",this.count);
    }
   
};

const divide=leble();
divide();
divide();

//Arrow Fucntion
function countNumber(){
    this.count=0;

    return () =>{
        this.count++;
        console.log("Hello",this.count);
    };


};

const count=countNumber();
count();
count();
