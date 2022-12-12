//Ada 2 cara mendeklarasikan sebuah object
// let user = new Object();
// let user = {};
let user = {
    name: 'Budi',
    age: 12
}

console.log(user.name);

//We can add, remove and read files from it at any time.
user.address = 'Ragunan';
user.phone = '12345678';
console.log(user);

delete user.phone;
console.log(user);

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}

//Object Method
// In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// When used alone, this refers to the global object.

// function aaa(){
//     console.log(this);
// }
// aaa();
let product = {
    productId: '123',
    productName: 'Cat Tembok',
    productInfo: function () { // With ES6, kita dapat mendefiniskan menjadi productInfo(){ ... }
        let p = function () {
            return `Product Id: ${this.productId}, Product sName: ${this.productName}`
        };
        // let p = () => this.productId;
        // return p.bind(this)();
        return p;
    }
}

console.log(product.productInfo()());

// Code diatas sebenarnya kita hanya membuat sebuah object dengan nama product,
// bagaimana kalau kita ingin membuat object product yang lain, tinggal copy-paste ? bisa
// Apakah ada cara yang lebih elegan untuk membuat sebuah blue print product

function Product(id, name) {
    let product = {}
    product.productId = id;
    product.productName = name;
    product.productInfo = function () {
        return `Product Id: ${this.productId}, Product sName: ${this.productName}`
    }
    return product;
}

console.log('Product')
let product01 = Product('1', 'Kacang');
let product02 = Product('2', 'Permen');
console.log(product01.productInfo());
console.log(product02.productInfo());

// Functional Instantiation
// Ada downside yang mungkin kita tidak sadari, ketika kita membuat 5 buat object Product yang sama
// secara otomatis kita juga mendeklarasikan 5 buah fungsi productInfo yang logic nya sama.
const ProductMethod = {
    // productInfo: function () {
    //     return `Student ID: ${this.productId}, Student Name: ${this.productName}`;
    // }
    // Kalau nama key object sama dengan value, pemberian nama key bisa dihilangkan
    productInfo() {
        return `Product ID: ${this.productId}, Product Name: ${this.productName}`;
    }
}

function ProductObject(id, name) {
    let product = Object.create(ProductMethod);
    product.productId = id;
    product.productName = name;
    return product;
}

console.log('New Product')
product01 = ProductObject('3', 'Susu');
product02 = ProductObject('4', 'Telor');
console.log(product01.productInfo());
console.log(product02.productInfo());

// Code diatas berjalan dengan baik, cuma agak kurang bagus, karena kita harus membuat object lain khusus untuk method
// yang reusable
// Untuk itu, javascript memiliki fitur prototype, yang sebenarnya hanya sebuah object kosong
// Setiap fungsi dalam javascript, memiliki prototype
// function doNothing(){}
// console.log('Empty Prototype');
// console.log(doNothing.prototype);
// Prototypal Instantiation
function ProductPrototype(id, name) {
    let product = Object.create(ProductPrototype.prototype);
    product.productId = id;
    product.productName = name;
    return product;
}

ProductPrototype.prototype.productInfo = function () {
    return `Product ID: ${this.productId}, Product Name: ${this.productName}`;
}

console.log('New Product Prototype')
product01 = ProductPrototype('5', 'Kopi');
product02 = ProductPrototype('6', 'Gula');
console.log(product01.productInfo());
console.log(product02.productInfo());


// Keyword new
// Constructor Function
// Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this,
function NewProduct(id, name) {
    this.productId = id;
    this.productName = name;
}

// NewProduct.prototype.productInfo = function () {
//     return `Product ID: ${this.productId}, Product Name: ${this.productName}`;
// }
// NewProduct.prototype.productInfoCsvFormat = function () {
//     return `${this.productId},${this.productName}`;
// }

NewProduct.prototype = {
    productInfo() {
        return `Product ID: ${this.productId}, Product Name: ${this.productName}`;
    },
    productInfoCsvFormat() {
        return `${this.productId},${this.productName}`;
    }
};
console.log('New Product')
product01 = new NewProduct('7', 'Rokok');
product02 = new NewProduct('8', 'Korek');
console.log(product01.productInfo());
console.log(product02.productInfo());
console.log(product01.productInfoCsvFormat());
console.log(product02.productInfoCsvFormat());

// Result will be undefined
// let newMenu = NewProduct('7', 'Rokok');
// console.log(newMenu);

// Inheritance
// console.log(NewProduct.prototype);
function FoodProduct(price) {
    this.price = price;
}

FoodProduct.prototype = {
    ...NewProduct.prototype,
    foodInfo() {
        return `Product ID: ${this.productId}, Product Name: ${this.productName}, Price : ${this.price}`;
    }
}

console.log('Inheritance');
let food01 = new FoodProduct();
food01.price = 10000;
food01.productId = '123';
food01.productName = 'Nasi kapau';
console.log(food01.productInfo());
console.log(food01.foodInfo());

// Object method with arrow function
// Arrow function tidak memiliki this
// console.log('Object Arrow Fn');
// const counter = {
//     count: 0,
//     next: () => ++this.count,
//     current: () => this.count
// };
// console.log(counter.next());


