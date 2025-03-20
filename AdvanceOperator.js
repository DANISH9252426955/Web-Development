//1.Dot Operator(.)
//Dot operator for using accesing object properties and method
let student={
    name:"Sourabh",
    rollNumber:89,
    collegeName:"VGU"
}

console.log(student.name); // Sourabh
console.log(student.rollNumber);//89
console.log(student.collegeName);//VGU

//Dot operator using by Method
let student1={
    name:"Sourabh",
    rollNumber:89,
    collegeName:"VGU",
    getDetail:function (){
        return `Student Name:-${this.name},Student Rollnumber:-${this.rollNumber},Student College:-${this.collegeName}`
    }
}
console.log(student1.getDetail());


//2.Nullish Coalescing Operator(??)
let name=null;
let newName="Danish khan";

let result= name ??newName;
console.log(result); //Danish Khan

//compare
console.log(0 || "Simpal");  //Simple
console.log(0 ?? "Simpal"); //0

//3.Optional Chaining Operator (?.)
let example={name:"danish"};

let result1=example.contect?.age; //it will not genrated error and throw undefine
console.log(result1);

//4.Spread Operator(...)
let personalDeatil={name:"danish",age:21,city:"jaipur"};
let jobDetail={designatiom:"Software developer",company:"accentue"};

let result2={...personalDeatil,...jobDetail};
console.log(result2);

//5.Rest Operator
function calculateTotal(...prices) {
    return prices.reduce((total, price) => total + price,0);
}

console.log(calculateTotal(12,34,90,56)); //192

//6.Delete Operator(delete)
let detail={name:"danish",age:21,addrease:"jaipur",contectNumber:9252426955};
delete detail.contectNumber;

console.log(detail); //it will delete key and value frome object


//7.Comma Operator
let x=(1,2,3,5);
console.log(x);


for (let i = 0, j = 10; i< 5; i++, j--) {
    console.log(i, j);
}

//8.Unary plus (+) and Unary Negation (-)

console.log(+"7782") // convert string to number
console.log(-"6457") // -6457

//Logical Operator and Execution Flow
let mobileNumber="9252426955";
let isValid=mobileNumber.length==10 && !isNaN(mobileNumber);

console.log(isValid ? "Number is valid" : "Number is Not Valid");
