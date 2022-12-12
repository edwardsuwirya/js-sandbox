// While loop
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

// Do-While loop
i = 0;
do {
    console.log(i);
    i++;
} while (i < 3);

// For loop
for (let i = 0; i < 3; i++) {
    console.log(i);
}

let fruits = ["Apple", "Orange", "Plum"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruitIdx in fruits) {
    console.log(fruits[fruitIdx]);
}

for (let fruit of fruits) {
    console.log(fruit);
}
