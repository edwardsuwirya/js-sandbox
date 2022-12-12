// In JavaScript, things that are immutable don’t change in value when you use them
let age1 = 42;
let age2 = age1;
age2 = 84;
console.log(age1);

// Primitive data type immutable
// Array dan object mutable

let names = ['Jasion', 'Tike', 'Joni'];
let moreNames = names;
names.push('Padli');
console.log(moreNames);

// Membuat array immutable
// 1. Spread operator
// moreNames = [...names];
// 2. Array.from
moreNames = Array.from(names);
names.push('Johe');
console.log(moreNames);
console.log(names);

