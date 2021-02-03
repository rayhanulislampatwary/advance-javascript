const numbers = [3,5,32,5,7];
const output = [];

// type 1

// for(let i=0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// type 2

const result = numbers.map(function(element){
    return element * element;
})
// console.log(result);

// type 3

// const square = element => element * element;
// const result = square(2)
// console.log(result);
 

// type 4
const result4 = numbers.map(x => x * x);
console.log(result4);

// filter 
// type 1

const bigger = numbers.filter( x => x > 8); // akhane 8 thake kon kon di boro ace ta khuje ber korci filter ar maddome

console.log(bigger);

const inThere = numbers.find(x => x < 5); // find kora hoise .. ata sudu matro akta element k k e return dibe
console.log(inThere);