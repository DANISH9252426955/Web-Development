//Primitive Data Type in javaScript(Store in stack memory)
//1.String Example
let customer="danish khan";
console.log(`Welcome to our store ${customer}`);

//2.Number Example
let amount=1230.90;
let finalGst=amount * 0.18;
let finalAmount=amount + finalGst;

console.log(`The Final Amount is :-${finalAmount}`); //1452.462

//3.Boolean (true / false) Example

let widrawAmount=true;
if(widrawAmount){
    console.log("The transaction is succesfully completed");
}else{
    console.log("The transaction is not succesfully completed");
}

//4.BigInt Example
let adharNumber=BigInt(2324563257823);
console.log(adharNumber);

//5.Symbols Example
let atmPassword= Symbol("ATM Password");

let userDetail={
    name:"danish khan",
    bankName: "SBI",
    [adharNumber] : "123Danish321",
}

console.log(userDetail[adharNumber]);


//Refrence Data Type in javaScript (Store in heap memory)
//1.Object Example
let userProfile={
    name : "danish khan",
    age : 21,
    city : "jaipur"
};
let newUser={...userProfile}; //object copy 
console.log(newUser.city);

//2.Array Example

let cityName=["jaipur","Agra","Delhi","Kolkatta"];
cityName.push("Banglore");

console.log(cityName);

//3.Fuction Example

function applyDiscount(price,disValu){

    return price - (price * disValu /100); 
}

let result=applyDiscount(5000,20);
console.log(result);

//4.JSON Universal Type of data type

let detail = `{"name" : "samsung","price" : "25000"}`;
let result1=JSON.parse(detail);

console.log(result1);