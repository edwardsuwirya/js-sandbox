let umur = 31;
if (umur < 10) {
    console.log('Anak-Anak');
} else if (umur > 11 && umur < 20) {
    console.log('Remaja');
} else {
    console.log('Dewasa');
}

//ternary
let accessAllowed = (umur > 18) ? true : false;
console.log(accessAllowed);

// membandingkan value dan tipe data menggunakan ===
console.log(true == 1);
console.log(true === 1);

// AND “&&” finds the first falsy value
console.log(1 && 0);
console.log('ww' && 5);

let a = 2 + 2;

switch (a) {
    case 3:
        console.log('Terlalu kecil');
        break;
    case 4:
        console.log('Tepat!');
        break;
    case 5:
        console.log('Terlalu Besar');
        break;
    default:
        console.log("Error");
}
