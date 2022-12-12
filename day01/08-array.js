//Deklarasi
// let arr = new Array();
let arr = [];

let buah2an = ['pepaya', 'alpukat', 'bengkoang'];
console.log(buah2an[1]);

// Multi data type
let anekaRagam = [1, true, 'Joko', ['satu', 'dua'], function () {
    console.log('Hello World')
}];
anekaRagam[4]();
console.log(anekaRagam[3][0]);

// Menambahkan element
// push menambahkan element di akhir
buah2an.push('jambu');
console.log(buah2an);
// unshift menambahkan element di awal
buah2an.unshift('pisang');
console.log(buah2an);

// Menghapus element
buah2an.pop();
console.log(buah2an);
buah2an.shift();
console.log(buah2an);

console.log(buah2an.length);
//truncate array
// buah2an.length = 1; //0, clear array
// console.log(buah2an);

console.log(String(buah2an));

buah2an.splice(1, 2);
console.log(buah2an);

// Menghapus elemen kemudian menambahkan dengan yang baru
let buahYangTerbuang = buah2an.splice(0, 1, 'Kedongdong', 'Melon', 'Semangka');
console.log(buahYangTerbuang);
console.log(buah2an);

// Slice
let arrTest = ['t', 'e', 's', 't'];
console.log(arrTest.slice(1, 3));

// Concat
console.log(arrTest.concat(['u', 'n', 'i', 't']));
//Bagaimana kalau hasilnya unittest
// console.log(['u','n','i','t'].concat(arrTest));

// //loop foreach
// arrTest.forEach((item, index, array) => {
//     console.log(`${item} is at index ${index} in ${array}`);
// });
//
// //Find index
// console.log(arrTest.indexOf('s'));
//
// //Find method
// let angka = [11, 8, 10, 5, 7, 9, 12, 6];
// let result = angka.find(function (item, index, array) {
//     return item % 2 === 0;
// });
// console.log('Find');
// console.log(result);
//
// //Filter method
// result = angka.filter(function (item, index, array) {
//     return item % 2 === 0;
// });
// console.log('Filter');
// console.log(result);
//
// //Transform
// result = angka.map(function (item, index, array) {
//     return item * item;
// });
// console.log('Transform');
// console.log(result);
//
