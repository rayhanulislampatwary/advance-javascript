//  Null-Vs-Undefined.js

// type 1 [Undefined]

function numbers(num1, num2) {
    console.log(num1 + num2);
}
// const result = numbers(12, 14);
// console.log(result);

// output = 26 & undefined

// type 2 [Undefined]
function numbers(num1, num2) {
    console.log(num1 + num2);
    return;
}
// const result = numbers(18, 14);
// console.log(result);
// output = 32 & undefined.

// type 3
function numbers(num1, num2) {
    console.log(num1 , num2);
    return;
}
const result = numbers(18);
console.log(result);


// type 4
const person = { name: 'shopik', mobileNumber:56543};
console.log(person.gf); // ata o undefined dekabe bc ata te gf name kicu declare kora e hoi nai.

// type 5
let name = undefined;
console.log(name); // akhne undefined akti reserved word.... ake bebohar na kora e valo.
