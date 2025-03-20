//Example 1. Why Writing Clean and Optimized JavaScript Matters?
//Example 2. Use let and const Instead of var
//Bad practice
var city="jaipur";
if(true){
    city ="Bangloure"; //Var Ignour bloack of scope 
}
console.log(city); //Unexepted output

//good practice
let city1="jaipur";
if(true){
    let city1="bangloure";
    console.log(city); //let and const is function scope and block of scope
}
console.log(city1);

//Example:-3. Use Meaningful and Descriptive Variable Names
//Bad Practice
let x=50;
let y=100;
let z=x*y;
console.log(z);

//Good practice
let width=50;
let height=100;
let area= width * height; //Easy to understand

console.log(area);

//Example 4. Avoid Hardcoding Values  - Use Constants
//Bad Practice
let price=4000;
let discount=price * 0.10;
let finalPrice=price-discount;

console.log(discount);
console.log(finalPrice);

//Good Practice
const DISCOUNT_RATE=0.10;
let price1=9000;
let discountPrice=price1 * DISCOUNT_RATE;

console.log(discountPrice);

//Example 5. Use Template Literals for String Concatenation
//Bad Practice
let name="danish";
let age=21;

console.log("The name is:-"+name +" The age is:- "+age);

//Good practice
 name="Danish khan";
 age=22;

console.log(`The name is:-${name} The age is:- ${age}`);


//Example 6. Optimize Loops for Better Performance
//Bad Practice
let number=[2,4,6,8,9,10];

for(let i=0;i<number.length;i++){
    console.log(number[i]+" ");   
}

//Good pratcice
number=[2,4,6,8,9,10];
let length=number.length; //catch length    

for(let i=0;i<length;i++){
    console.log(number[i]+" ");
    
}

//Example 7. Use forEach, map, filter, and reduce Instead of Traditional Loops
//Bad Practice
let array=[2,4,6,8,10];
let squre=[];

for(let i=0;i<array.length;i++){
    squre.push(array[i] * array[i]);
};

console.log(squre);

//Good practice

let array1=[2,4,6,8,9,10];

let squre1=array1.map(num => num * num); //More Readable
console.log(squre1);


//Example 8. Avoid Modifying Objects Directly  - Use the Spread Operator
//Bad Practice
let user={name:"lavish",city:"Jamnagar"};
user.city="Jaipur";

console.log(user);

//Good practice
let user1={name:"Aman Agarwal",city:"delhi"};
let updateUser={...user1,city:"Mumbai"}; //create a new object

console.log(updateUser);


//Example 9. Write Modular Code  - Use Functions for Reusable Logic
//Bad Practice
let money1=500;
let money2=600;
console.log(money1 * 0.10);
console.log(money2 * 0.10);

//Good Practice
function calculateDiscount(price){
    return price * 0.10;
}

console.log(calculateDiscount(500)); //More readable
console.log(calculateDiscount(600));


//Example  10. Handle Errors Gracefully with try...catch
//Bad Practice
let data = JSON.parse('{invalid json}'); 


//Good Practice
try{
    let data = JSON.parse('{invalid json}');
}catch(error){
    console.log("Invalid Json formet:-"+error.message);
    
}