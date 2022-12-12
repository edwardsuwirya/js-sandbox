// A callback is a function passed as an argument to another function.

function penjumlahan(x, y) {
    return x + y;
}

function pengurangan(x, y) {
    return x - y;
}

function calculator(angka1, angka2, operatorCallback) {
    console.log(operatorCallback(angka1, angka2));
}

calculator(1, 2, penjumlahan);
calculator(2, 3, pengurangan);

