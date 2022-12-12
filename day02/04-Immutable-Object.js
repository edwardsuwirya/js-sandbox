let person = {
    name: 'Johe',
    age: 21,
    address: 'BSD'
};
// let child = person;
// 1. Object Assign
// let child = Object.assign({},person);
// 2. Spread
let child = {...person}
person.phone = '12345678';
console.log(child);

