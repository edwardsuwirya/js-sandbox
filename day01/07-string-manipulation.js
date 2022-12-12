let itBootCamp = 'Enigma Camp';

let length = itBootCamp.length;
console.log(length);

let part = itBootCamp.slice(2, 4);
console.log(part);

// Apabila negatif dihitung dari belakang
part = itBootCamp.slice(-4, -2);
console.log(part);

part = itBootCamp.slice(7);
console.log(part);

let newPart = itBootCamp.substr(7, 2);
console.log(newPart);

// Replace case sensitive
part = itBootCamp.replace('camp', 'IT BootCamp');
console.log(part);

// Replace case insensitive
part = itBootCamp.replace(/camp/i, 'IT BootCamp');
console.log(part);

// Replace all case insensitive
itBootCamp = 'Enigma Camp merupakan salah satu IT BootCamp di Indonesia';
part = itBootCamp.replace(/camp/ig, '');
console.log(part);

console.log(itBootCamp.toUpperCase())

// String concat
let text1 = 'Hello';
let text2 = 'World';
let text3 = text1.concat(' ', text2);
console.log(text3);

// Trim
text1 = '      Hello World!      ';
text2 = text1.trim();
console.log(text2);

let buah = 'apel,mangga,jeruk';
buah2an = buah.split(',')
console.log(buah2an);
