let isMember = true;
isMember = String(isMember);
//melihat tipe data variable
console.log(typeof isMember);
console.log(isMember);

let phoneNumber = "087123234";
phoneNumber = Number(phoneNumber);
console.log(typeof phoneNumber);

let age = "Tujuh Belas";
age = Number(age);
console.log(age);
// Numeric conversion rules:
// undefined =>NaN
// null	=> 0
// true and false =>	1 and 0
// string	Whitespaces from the start and end are removed.
// If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.

console.log(Boolean(1));
