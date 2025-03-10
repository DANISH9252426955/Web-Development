//1.ArithMetic Operations
console.log("10" - 5); //5
console.log("10" * 5); //50
console.log("10" / 5); //2
console.log("10" % 5); //0
//Addition
console.log("23" + 1) // 231 because + operator for using concatination
console.log(Number("23") + 1) //24 if you want to do addition string and number you need Number() method
console.log( +"23" +1);  //24

//2.Comparision Operation
console.log("100"  > 70); //true
console.log("5" > 10) ; //false

console.log("40" == 40); //true
console.log("40" === 40); //false

//3.Non - Numerical String
console.log("Hello" - 9); // NaN
console.log("JavaScript" * 2); //NaN

console.log(isNaN("200")); // false number valid
console.log(isNaN("Hi")); //true

//4.Explicit Type Conversation
//convert string to number

let amount="900";
console.log(Number(amount) + 100);  //1000
let amount1="950.50";
console.log(parseInt(amount1)) // 900
console.log(parseFloat(amount1)); //950.50

//convert number to string

let price=500;
console.log(String(price)) //"500"
console.log(price.toString()); //"500"