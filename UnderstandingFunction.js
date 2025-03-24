//How do function work?
function greet(){ //It is a function declaration
    console.log("Hello How Are you");
}

greet(); //function called 

//Example parameter Function
function userName(name){
   return `Welcome ${name}!`;
}

let result=userName("Amit");
console.log(result);


//Example Calculate the final amount after tax and discount
function calculateFinalAmount(price,taxRate,discount){
    const tax = price *  taxRate;
    const afterDiscount = price - discount;
   return afterDiscount + tax;
}

let finalAmount=calculateFinalAmount(1000,0.18,200);

console.log(`The final price is:- ${finalAmount}`);


//Example Hotel managment system
function checkAvailability(hotelId ,date){
    // Logic is missing because for this function we need to APIand dataBase 
}

function calculatePrice(night,price){
    return night * price;
}

function showReview(user , reviewText){
    console.log(`${user} say: ${reviewText}`);
}

let hotelAmount=calculatePrice(3,2000);
console.log(`The hotel rents is :- ${hotelAmount}`);

showReview("Danish khan","This hotel is Amazing and staff was cooprative");


//Example using DOM click button 

function handleClick(){
    console.log("Button Clicked"); //It will be run on browser
}

//document.getElementById("myBtn").addEventListener("Click",handleClick);


//Example greeting in real world scenario

function greeting(language){
    if(language === "hindi" || language === "Hindi"){
        return function(name){
            console.log(`Namaste ${name}`);
        }
    }else{
        return function(name){
            console.log(`Hello ${name}`);
        }
    }
}

let massage = greeting("Hindi");
massage("Rahul");