//Example for using loop calculating Factorial
function factorial(number){
    let fac=1;
    for(let i=1;i<=number;i++){
        fac=fac*i;
    }
    return fac;


}
console.log(factorial(6));

//Example solve this problem using by recursion 
function factorial1(number){
    if(number ===1) return 1;
    return number * factorial1(number-1); 

}

console.log(factorial1(6));


//1.Traversing a Nested Object (Recursion is Better)
let company = {
    name: "infosys",
    departments: {
        engineering: {
            manager: "rahul",
            employee: ["anil", "sonu"]
        },
        sales: {
            manager: "Deepak",
            employee: ["abhishek", "Danish"],
        }
    }
};

function printEmployeeDetail(department) {
    if (Array.isArray(department)) {
        department.forEach(employee => console.log(employee));
    } else if (typeof department === 'object' && department !== null) {
        for (let key in department) {
            printEmployeeDetail(department[key]);
        }
    }
}

printEmployeeDetail(company.departments);


//2.Tree traversal Recursion is better
class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function traverseTree(node) {
    console.log(node.value);
    node.children.forEach(child => traverseTree(child));
}

let root = new Node(1);
root.children.push(new Node(2), new Node(3));
root.children[0].children.push(new Node(4), new Node(5));
root.children[0].children.push(new Node(6), new Node(7));



traverseTree(root);

//Example Memoization (Avoids Recomputing Values)
let cach ={};

function memoizationFabonacci(n){
    if(n in cach){
        return cach[n];
    };

    if(n <=1) return n;

    cach[n]=memoizationFabonacci(n-1) + memoizationFabonacci(n-2);
    return cach[n];
}

console.log(memoizationFabonacci(50));



// Scenario large data set to find duplicate
function findDuplicate(arr) {
    let duplicate = [];

    for (let i = 0; i < arr.length; i++) { // Fixed 'length' spelling
        for (let j = i + 1; j < arr.length; j++) { 
            if (arr[i] === arr[j] && !duplicate.includes(arr[i])) {
                duplicate.push(arr[i]);
            }
        }
    }

    return duplicate;
}

let arr = [21, 34, 54, 78, 90, 21, 90];
let lebal = findDuplicate(arr);
console.log(lebal);


//Using hash map object set
function findDuplicateHash(arr){
    let seen={};
    let duplicate=[];

    for(let num of arr){
        if(seen[num]){
            if(!duplicate.includes(num)){
                duplicate.push(num);
            }
        }else{
            seen[num]=true;
        }
    }   
    return duplicate;

}

let array=[1,2,3,2,4,1,3,4,5,6,7,8,9,9];
let temp=findDuplicateHash(array);
console.log(temp);