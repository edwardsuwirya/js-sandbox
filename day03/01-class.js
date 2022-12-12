class Product {
    constructor(id, name) {
        this.productId = id;
        this.productName = name;
    }

    productInfo() {
        return `Product ID: ${this.productId}, Product Name: ${this.productName}`;
    }
}

let product01 = new Product('7', 'Rokok');
let product02 = new Product('8', 'Korek');
console.log(product01.productInfo());
console.log(product02.productInfo());


// Class tidak hanya sebagai syntactic sugar dari sebuah function
// syntactic sugar = Sintaks yang dibuat hanya untuk mempermudah pembacaan/penggunaan,dan tidak memiliki fungsi tambahan baru
console.log(typeof Product);


//Inheritance
class FoodProduct extends Product {
    constructor(price) {
        super();
        this.price = price;
    }

    foodInfo() {
        return `Product ID: ${this.productId}, Product Name: ${this.productName}, Price : ${this.price}`;
    }
}

let food01 = new FoodProduct();
food01.price = 10000;
food01.productId = '123';
food01.productName = 'Nasi kapau';
console.log(food01.productInfo());
console.log(food01.foodInfo());

