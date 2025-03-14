//Syntax Loop for(initilization ; condition ; updation){code execured};
//why loop is importance
//without loop problem
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

//how to solve this problem with loop 
for(let i=1;i<=5;i++){
    console.log(i); //itreration and executed code
}

//Without using a loop manual calculation in array
let array=[100,20,30,50];

let result=array[0]+array[1]+array[2]+array[3];

console.log(`The sum is :- ${result}`);


//using a loop solve this problem
let array1=[50,20,30,10];
let sum=0;
for(let i=0;i<array1.length;i++){
     sum+=array1[i];
}
console.log(`Total sum is :- ${sum}`);


//Automating User Input Validation (Form Validation Example)

// if (username === "") {
//     console.log("Username is required");
// }
// if (email === "") {
//     console.log("Email is required");
// }
// if (password === "") {
//     console.log("Password is required");
// }

//using loop

let personalDetail = {name : "danish khan",email : "",password : ""};

for(let key in personalDetail){
    if(personalDetail[key]===""){
        console.log(key + " is required"); //output email is required and password is required

    }
}

//fetching comments using loop 
let comments =["Nice Post!","Awesome","Very Helpfull"];

for(let i=0;i<comments.length;i++){
    console.log(`Comments is :- ${comments[i]}`);
}