//1.How JavaScript decides whether "5" + 1 should be "51" or 6.

console.log("5" + 1); //51 + operator for using a concatination in js
//if you wants to sum both value you need explicit type conversation

console.log(Number("5") + 1) // 6 because number method convert string to number

//2.How to avoid unexpected bugs caused by type coercion.
 //Avoid this 
console.log(0 == false) // true this == only compare to value not value type
console.log("123" == 123) //true
// Always used this
console.log(0 === false) //false this ===  compare both value and value type
console.log("123" === 123) //false

//3.Falsy vs. Truthy values – Understanding hidden conversion rules.

console.log( 0 || "danish"); //danish  0 is falsy value and danish is true
console.log( 1 && "danish"); //danish both value is true but it will give you last true value


// 1.Buggy Code

let pricePerItem = "100"; 
let quantity = 3;

let totalPrice = pricePerItem * quantity;

console.log(totalPrice);

//Fixed that

let pricePerItem1 = Number("100"); 
let quantity1 = 3;

let totalPrice1 = pricePerItem1 * quantity1;

console.log(totalPrice1);



//2.Buggy Code

let isTrue="0";

if(isTrue == false){
    console.log("This portion will be run");
}else{
    console.log("This portion will not be run");
}

//Fixed that

let isTrue1=false;

if(isTrue1 === false){
    console.log("Used this === operator");
}else{
    console.log("Dont used this == operator");
}


//3.Buggy code
let array=["100","90","50","20","10"];
array.sort()
console.log(array);



//fixed  that

let array1=["100","90","50","20","10"].map(Number);
array.sort((a, b) => a - b);
console.log(array);


//4.Buggy code 
let electriCityBill="230";
let discount=10;
let finalAmount=electriCityBill - discount;

console.log(finalAmount);

if(finalAmount){
    console.log("Discount Applied SuccesFully");
}else{
    console.log("Discount Not Applied");
}

//Fixed That
let electriCityBill1=Number("230");
let discount1=10;
let finalAmount1=electriCityBill1 - discount1;

console.log(finalAmount1);

if(finalAmount1 > 0){
    console.log("Discount Applied SuccesFully :- "+finalAmount);
}else{
    console.log("Discount Not Applied");
}


//5.Buggy Code

let zomato= {order : "250"};

if(zomato.order == 250){
    console.log("Your order accepted");
}else{
    console.log("Server Crash");
}


//Fixed That

let zomato1= {order : "250"};

if(Number(zomato1.order) == 250){ //this way is good 
    console.log("Your order accepted");
}else{
    console.log("Server Crash");
}
