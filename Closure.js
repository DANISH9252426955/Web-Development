//Example 1 Understanding scope

function showMassage(){
    let massage="Hello,Jaipur";
    console.log(massage); 
}

showMassage();
//console.log(massage); //Error Not define

//Example 2 Defining a Function Inside Another
function outer(){
    let city="Jaipur";

    function inner(){
        console.log("Welcome to",city);
    }

    inner();
}

outer();


//Example 3 The Magic of Closures

function outer(){
    let count=0;
    return function inner(){
        count++;
        console.log("The count is:-"+count);   
    };
};

let counter=outer();
counter();
counter();
counter();
counter();

//Why Are Closures Useful?
//Example 1 Data Privacy
function createBankAccount(){
    let balance=1000;
    return {
        deposite(amount){
            balance+=amount;
            console.log("Deposite Amount is:--",amount);   
        },
        checkBalance(){
            console.log("The Balance is:--",balance);
            
        },
        widrawAmount(amount){
        if(amount > balance){
            console.log("Unsaficient Balance");
        }else{
            balance-=amount;
            console.log("The Available Amount is:--",balance);  
        }
        }
    };
};  

const myAccount=createBankAccount();
myAccount.deposite(1000);
myAccount.checkBalance();
myAccount.widrawAmount(450);


//Example 2. Event Handlers and Callbacks

function createQuestions(nums){
    return function(){
        console.log("You Clicked Question",nums);
    };
};

const button1=createQuestions(1);
const button2=createQuestions(2);
button1();
button2();


//Example 3 Factory Function

function createMultipication(x){
    return function(y){
            return x * y;
    }
}

const double=createMultipication(2);
const triple=createMultipication(3);
console.log(double(5));
console.log(triple(5));

//Passing a Function into Another Function

function sendNotification(userName,notify){
    console.log("Recharging for",userName);
    notify(userName); 
}

function sendSMS(userName){
    console.log("Sent SMS   ",userName);
};

function sendEmail(userName){
    console.log("Sending Email",userName);
}

sendNotification("Danish Khan",sendSMS);
sendNotification("Rahul",sendEmail);

//Example Returning a Function from a Function

function createGreet(name) {

    return function(massage){
        console.log(`${massage}  ${name}`);
    };
    
};


const greetDanish=createGreet("Danish");
greetDanish("Hello how are you");

const greetAman=createGreet("Aman Ali Khan");
greetAman("Welcome to our Restaurent");

//Example Real-World Analogy: Jaipur-based Online Booking App

function logBooking(user,logMethod){
    logMethod(user);
};

function  bookBus(user) {
    console.log(`Bus Booked for ${user}`);    
}

function bookCab(user) {
    console.log(`Cab Booked for ${user}`);
}

function bookBike(user) {
    console.log(`Bike Booked for ${user}`);  
}

logBooking("Lavesh",bookCab); //output cab booked for lavesh
logBooking("Danish",bookBike);