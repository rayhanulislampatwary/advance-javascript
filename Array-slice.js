const numbers = [0,1,2,3,4,5,6,7,8,9];
const part = numbers.slice(2, 5); // slice korlam ... mane array thake select kora gulu nilam
console.log( part);

const removed = numbers.splice(5, 3, 5); // array the bad deya
console.log(removed);
console.log(numbers);

const together = numbers.join(''); // sob gulu k ak shate join kora.
console.log(together);

console.log(' ata nije try korteci');

const nums = [0,2,4,5,6,7,8];
const parts = nums.slice(1, 4);
console.log(parts);
const badDeya = nums.splice(2,5, 7, 8 ,9);
console.log(badDeya);
console.log(nums);
const join = nums.join(',');
console.log(join);
