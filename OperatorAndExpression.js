//1.Arithmetical Operator
console.log(10+5); // 5
console.log(10-5); //5
console.log(5*2); //10
console.log(10/5); //2
console.log(20%3); //2
console.log(2**4); //16

//2.Assigment Operator
let a=15;
console.log(a+=5); //20
console.log(a-=5 ); //10
console.log(a*=5); //75
console.log(a/=5); //3
console.log(a%=5); //0


//3.Comparison Operator
console.log(12=="12"); //true because it compare only value not of value type
console.log(12==="12"); // false because it compare Both value and  value type
console.log( 12 != "12"); //false
console.log(12 !== "12");  //true
console.log(12 > 13); //false
console.log(12 < 12); //false
console.log(12 >= 12); //true
console.log(11 < 12); //true
console.log(11 <= 11); //true


//4.Logical Operator
let x=5;

console.log(x > 10 && x < 10  ); //false 
console.log(x > 4 || x >10); //true
console.log(!x < 10); //true


//5.Bitwise Operator
console.log(4 & 2); //0
console.log(4 | 2); //6
console.log( 3 ^ 2); //1
console.log(~2); //-3
console.log(5 << 1) //10
console.log(9 >> 2) //2

//6.Ternary Operator
let age=18;
let Result=age >= 18 ? "Adult":"Minor";
console.log(Result);

//7.Type Operator

console.log(typeof 50); //number
console.log(typeof {}); //object

