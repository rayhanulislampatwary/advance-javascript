const students = [
    {id: 14, names: 'kopi khan'},
    {id: 24, names: 'okey khan'},
    {id: 34, names: 'thikace khan'},
    {id: 44, names: 'achaa khan'},
];

const nams = students.map(s => s.names);
console.log(nams);
const bigId = students.filter( s => s.id > 30);
console.log(bigId);

const person = [
    {nmae:'rohim', age:28, address:'ctg'},
    {nmae:'sofia', age:25, address:'feni'},
    {nmae:'korim', age:22, address:'cumilla'}
];

const addresses = person.map( add => add.address.length < 5);
console.log(addresses);