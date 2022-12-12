//Kita dapat mengisi sebuah variable dengan tipe data apapun
//Kemudian bisa diisi dengan tipe data lainnya (dynamically typed)

let number = 1;
number = "Satu";

console.log(number);

//1. Tipe data number = integer and floating point number
// Tipe data “number” tidak bisa memiliki nilai lebih besar dari 9007199254740991, atau lebih kecil dari -9007199254740991
// Baru" ini diperkenalkan tipe data BigInt

//2. Tipe data string
// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.

// Double quotes dan single quotes tidak ada bedanya
// Yang spesial adalah Backtick, dimana kita bisa menggunakan string interpolation
let name = "Enigmacamp";
console.log( `Hello, ${name}!` );

//3. Tipe data boolean

//4. Tipe data null
// null bukan  “reference to a non-existing object” or a “null pointer” seperti di bahasa pemrograman lainnya.
// Tapi sebuah special value yang merepresentasikan “nothing”, “empty” or “value unknown”.
let age = null;

//5. Tipe data undefined
//Arti sebuah undefined adalah “value is not assigned”.
// Apabila variable dideklarasikna, tapi belum di-assigned, tipe data value adalah undefined
// Jadi undefined adalah default initial value untuk unassigned variable
let alamat;
console.log(alamat);

//6. Tipe data object
// Materi berikut akan diberikan terkait object


