// Membuat fungsi sederhana
function showMessage() {
    console.log('Hello everyone!');
}

// Memanggil fungsi
showMessage();

// Outer variable, inner variable fungsi
let outerVar = 13

function showAge() {
    let ageCounter = 1
    console.log(outerVar + ageCounter);
}

showAge();

// Secara default sebuah argument berisi undefined
// function showAddress(address1,address2) {
//     console.log(address1);
//     console.log(address2);
// }

function showAddress(address1 = 'n/a', address2 = 'n/a') {
    console.log(address1);
    console.log(address2);
}

// var _ = undefined
showAddress(undefined, 'b');

// return harus sebaris dengan value yang akan di-return
function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
console.log(result);

//kalau ingin multiline return, gunakan ()
function subs(a, b) {
    return (
        a - b
    );
}

result = subs(1, 2);
console.log(result);

// Function Expression.
// a function is a value
let sayHi = function () {
    console.log("Hello");
};

sayHi();

//Callback Function
function addition(x, y) {
    return x + y;
}

function calculator(angka1, angka2, add) {
    return add(angka1, angka2);
}

console.log(calculator(1, 2, addition));

//IIFE (Immediately Invoked Function Expression)
result = function (a, b) {
    return a - b;
}(3, 1);
console.log(result);

// Arrow Function
console.log('Arrow Function');
let sayHello = () => console.log('Hello');
sayHello();
// function addition(x, y) {
//     return x + y;
// }
let additionArrow = (x, y) => x + y;
console.log(calculator(1, 2, additionArrow));

// Multiline ArrowFn
console.log('Multi line Arrow Fn')
additionArrow = (x, y) => {
    if (x < 0 || y < 0) {
        return null;
    }
    return x + y;
};

console.log(calculator(-1, 2, additionArrow));

//IIFE ArrowFn
(() => console.log('Hello Enigma'))();
((nama) => console.log(`Hello ${nama}`))('EnigmaCamp');
