//Example 1.Assigning a Function to a Variable
//Example to greeting a using function to a variable

const sayHi=function(){ //You have just store function inside the variable
    console.log(`Hi There`);
}
sayHi(); 

//Example of sum using function to a variable
const sum=function(a,b){ //You have just store function inside the variable
    return a+b;    //calculate the sum
}

console.log(sum(6,5)); //this function give you sum of value

//Example 2 Passing a Function as an Argument

function applyDiscount(amount,discountFunction){
    return discountFunction(amount);
}

const studentDiscount=function(amount){
    return amount * 0.5;
}

const customerDiscount=function(amount){
    return amount * 0.9;
}

const finalAmount=applyDiscount(5000,studentDiscount);

console.log(`The Final Price is:- ${finalAmount}`);


//Example 3 Returning a Function from Another Function
function createGreet(name){
    return function(massage){
        console.log(`${massage} , ${name}`);
    }
}

const greet=createGreet("Danish");
greet("Hello"); //Hello Danish


//Example 4 Storing Functions in Data Structures like array and object in form

const calculator =[
    function(a,b){
        console.log("The sum is:- ",a+b);
    },
    function(a,b){
        console.log("The subtract is:- ",a-b);
    },
    function(a,b){
        console.log("The Multipication is:- ",a*b);
    },
    function(a,b){
        console.log("The Divident is:- ",a/b);
    },
    function(a,b){
        console.log("The Moduls is:- ",a%b);
    },
];
console.log("Choose Any Option Which you wants to performe......");
console.log("1 For Addition(+)");
console.log("2 For Subtract(-)");
console.log("3 For MultiPication(*)");
console.log("4 For Divident(/)");
console.log("6 For Module(%)");

let choice=prompt("Enter the your choice:-");
let a=prompt("Enter the First Number:-");
let b=prompt("Enter the Secod Number:-");
choice-=1;

switch(choice){
    case 0:
        calculator[0](a,b);
        break;
    case 1:
        calculator[1](a,b);
        break;
    case 2:
        calculator[2](a,b);
        break;
    case 3:
        calculator[3](a,b);
        break;
    case 4:
        calculator[4](a,b);
        break;
    default :
    console.log("This Number  is not exit");
}


//Using Object
const handle={
    onLogIn:function(){
        console.log("Login SuccessFully");
    },
    onLogOut:function(){
        console.log("Logout Successfully");
    }
};

handle.onLogOut();
