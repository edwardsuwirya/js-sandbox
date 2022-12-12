// Mungkin ada yang pernah baca" deklarasi variable menggunakan var
// The var declaration mirip dengan let
// penggunaan var merupakan cara lama
var umur = 12;
console.log(umur);

// Beberapa perbedaan
// 1. “var” tidak memiliki block scope
if (true) {
    var test = true; // coba ganti var dengan let, akan terjadi error
}
console.log(test);

// Apabila var di dalam block function, var akan menjadi function level variable
function sayHi() {
    if (true) {
        var greeting = "Hello";
    }

    console.log(greeting);
}

sayHi();
// alert(greeting); // error

// 2. var memungkinkan redeclaration
var nama = 'Enigma';
var nama = 'Camp';

console.log(nama);

// 3. var dapat dideklarasikan setelah penggunaan (hoisting)
function sayHello() {
    greeting = 'Hello';
    console.log(greeting);
    var greeting;
}

sayHello();
