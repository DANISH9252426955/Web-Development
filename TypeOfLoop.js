//1. for Loop – Best for Fixed Repetitions
//Example: Printing Numbers from 1 to 5
for(let i=0;i<=10;i++){
    console.log("Number is:-",i);
}

//example real world Apply dicount
let price=[200,100,20,40,70]; //10% discount apply

for(let i=0;i<price.length;i++){
    price[i]=price[i]*0.2;
}
console.log(price);

//2.while loop best when iterations depend on condition
//Example:-
let count=10;
while(count > 0){
    console.log("Counts is :-"+count);
    count--;
}
//Example for login attempt

let attempt=3;
let password="danish5050";
let userInput="";

while(attempt > 0 && userInput !== password){
   // userInput=prompt("Enter the Password");

    if(userInput == password){
        console.log("Login Succesfully");
    }else{
        if(attempt >0){
        attempt--;
        console.log("enter the wrong password and attempt left :-"+attempt);

        }
        
    }

    if(attempt === 0 && userInput !== password){
        console.log("Your is locked now");
    
    }
}

//3.do while loop executes the code at least once, even if the condition is false

//Example:-
let age;
do{
 //age=prompt("Enter the age:-");
}while(isNaN(age) || age <0);

console.log("valid age entered:",age);

//Example for feedback
let feedback;
do{
    //feedback=prompt("Enter the feedback rating under (1-5):-");
}while(isNaN(feedback) || feedback < 0 || feedback > 5);

console.log("Thank you for giving this feedback:-",feedback);


//4.for each loop for using with array  
let colors = ["Red", "Green", "Blue"];

colors.forEach(function(value,index) {
    console.log(index+ "  Color:", value);
});

//Example :--
let userNam=["Danish","Aman Ali","Rahul","Suman"];

userNam.forEach(function(value , index){
    console.log(index+1 + " " + value);

});


//Best practice for choosing the right loop in javascript
//5.The Map() method create a new array apply function to each elements
//Example :-
let riyal=[10,20,49,60];
let indianMoney=22;

let totalAmount=riyal.map(price => price * indianMoney);

console.log(totalAmount);


//6.The filter() method creates a new array containing only elements that meet a certain condition.
//Example :-
let elements=[12,3,4,5,7,9,10];

let evenNumber=elements.filter(num => num  % 2 === 0);

console.log(evenNumber);

//7.The reduce method for using iterate Array and return singal value
//Example:-
let demo=[100,800,50,50];

let result=demo.reduce((sum,demo)=> sum + demo,0);

console.log(result);

//optimizing loop for speed
//1.Example:- Bad practice of an Inefficient Loop

let number1=[1,2,3,4,5];
let total=0;
for(let i=0;i<number1.length;i++){
    total+=number[i] * Math.pow(2,i);
}
console.log(total);

//Example:-Good Practice Optimized version
let num1=[1,2,3,4,5];
let total1=0;
let num2=[1,2,4,8,16];

for(let i=0;i<num1.length;i++){
    total1 += num1[i] * num2[i];
}
console.log(total1);


//2.Example:- Bad practice of an Inefficient version

let userName=["Naman","Anil","Danish","Nazim"];
let found=false;

for(let i=0;i<userName.length;i++){
    if(userName[i] === "Danish"){
        console.log("User is Found:-"+userName[i]);
        found=true;
    }
}

//Example:We have another optimization way for this question good practice

let userName1=["Naman","Anil","Danish","Nazim"];

for(let i=0;i<userName.length;i++){
    if(userName[i] === "Danish"){
        console.log("User is Found:-"+userName[i]);
        break; // break for using immediatly exit the loop
    }
}


//3.using  map(),filter(),reduce()instead of manual loop
//Bad Example:----
let array=[1,2,3,4,5];
let double=[];

for(let i=0;i<array.length;i++){
    double.push(array[i] * 2);
}
console.log(double);

//Good Example:----
let array1=[1,2,3,4,5];

let finalResult=array1.map(temp => temp * 2);

console.log(finalResult);


//4.Avoid for in loop 
//Example :-- Bad Practice 

let simple=[10,20,30,40];

for(let i in simple){
    console.log(simple[i]);
}

//we should use for each loop for this condition 
//Example :---Good Practice
let simple1=[10,20,30,40];
simple1.forEach(num => console.log(num));


//Example :-- Bad Practice used nested loop 
let number=[1,2,3,4,5,6];
for(let i=0;i<number.length;i++){
    for(let j=0;j<number.length;j++){
        console.log(number[i] + number[j]);
    }
}

 //Example :-- Good Practice for using for each loop
 number=[1,2,3,4,5,6];
let temp=[];

number.forEach(num => {
    temp.push(console.log(num + num));
})