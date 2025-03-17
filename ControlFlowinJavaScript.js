//1.Example :- without control flow
//
let age=18;
console.log("you are adult");
console.log("you are not adult");

//Example :- with using control flow and (if condition)
let age1=18;
if(age1 >= 18){ // it check condition if condition is true if block executed and otherwise else block
    console.log("You are adult");
}else{
    console.log("you are not adult");
}

//Example :- decision Making if else statement if condition is true code will be executed
let agE=17;
if(agE >= 18){
    console.log("Access Granted");
}else{
    console.log("Access Denied you must be 18 and above");
}

// Example :- Multiple using if else condition 
let marks=60;

if( marks >= 90){
    console.log("Grade is A");
}else if(marks >=80){
    console.log("Grade is B");
}else if(marks >= 70){
    console.log("Grade is C");
}else if(marks >=50 && marks < 70) {
   console.log("Grade is D")
}else{
    console.log("Sorry Your are Fail Pls Try Again");
}

// Example :- Login Page using by prompt
let storedPassword = "secure123";
 let userInput = "secure123" //prompt for using input from user

if(userInput === storedPassword) {
    console.log("Login successful.");
} else {
    console.log("Incorrect password. Try again.");
}


//2.Switch statement for handling multiple condition
//Example :-

let day = "monday";

switch(day){
    case "sunday" :
        console.log("It 's the weekend");
        break;
    case "monday":
        console.log("It's the working day");
        break;
    case "saturday":
        console.log("It's the half day");
        break;
    case "friday":
        console.log("Weekend is near");
        break;
    default :
    console.log("this day is not access in mylist");
}

//Example :- Second example for using a make calculator using by switch case
let a=6;
let b=4;
let operation="-";

switch(operation){
    case "+":
        console.log("The Addition is :-",(a+b));
        break;
    case "-":
    console.log("The Subtraction is :- ",(a-b));
    break;
    case "*":
        console.log("The multipication is :-",(a*b));
        break;
    case "/":
        console.log("The division is :-",(a/b));
        break;
    case "%":
        console.log("The Modulos is :-",(a%b));
        break;
    default:
        console.log("This Operator is Does't acces in our list");
}

