// 1.The truth behind "==" vs. "===" and when to use each
//== it check only value not type and Its not safe
console.log("5" == 5); //true
console.log(0 == false);//true
console.log(null == undefined);//true

// === It check both value and type and Its safe
console.log("5" === 5); // false
console.log(0 === false);// false
console.log(null === undefined);// false


// 2.How JavaScript decides whether "5" + 1 should be "51" or 6.

// When We Using Arithmetic Operators

console.log("5" + 1); // 51 because + Operator for using a concatenation
console.log("9" - 5); // 4  (Arithmetical Operator)
console.log("10" * 2); //20 (Arithmetical Operator)
console.log("10" / 2); //5 (Arithmetical Operator)
console.log( 5 + 5); //10 (Arithmetical Operator)

//When We Using Comparison Operators

console.log("10" > 5) // true (because "10" is converted to 10)
console.log("5"  < 10) // true (because "5" is converted to 5)
console.log("100" < 50) // false (because "100" is converted to 100)

// How to Avoid Unexpected Type Coercion?
console.log(Number("9") + 1); //10 
console.log(parseInt("100px")) //100 It will genrated String to number
console.log(parseFloat("10.5")) // 10.5 It will genrated String to float number