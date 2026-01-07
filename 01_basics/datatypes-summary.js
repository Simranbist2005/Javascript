
//Primitive

/* 1. String
    2. Number
    3. Boolean
    4. Null
    5. Undefined
    6. Symbol
    7. BigInt
*/

//Non Primitive (reference type)
/*
1. Array
2. Objects
3. Functions
 */

//to declare symbol

const id = Symbol('123');
const anotherId = Symbol ('123');
console.log(typeof anotherId)
// console.log(id === anotherId);

const bigNumber = 654321234564321n
// console.log(typeof bigNumber)

const superHeros = ["Spiderman", "Batman", "Superman", "Avataar"];
let myObj = {name: "Simran",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World!!");
}

console.log(typeof myFunction)