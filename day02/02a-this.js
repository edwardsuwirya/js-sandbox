//if you forgot to declare a variable with var ,
// JavaScript would merrily assume you were referring to a global variable
// "use strict";1
x = 20

const myObj = {
    x: 50,
    foo: function () {
        // Registered as global
        // abc = 10;
        console.log(this.x)
    }
}
// With a regular function this represents the object that calls the function
// which could be the window, the document, a button or whatever
console.log("Regular Function in myObj")
myObj.foo()

const foo = myObj.foo
console.log("Regular Function without obj")
foo()
// console.log(global)

// In short, with arrow functions there are no binding of this.
// With arrow functions the this keyword always represents the object that defined the arrow function.
// object does not create a lexical scope, As a general rule, it is safer to use traditional functions as object methods by default.
// Lexical scope is the ability for a function scope to access variables from the parent scope
const myObjArr = {
    x: 50,
    foo: () => {
        console.log(this.x)
    }
}

// With an arrow function this represents the owner of the function:
console.log("Arrow Function")
myObjArr.foo();
const fooArr = myObjArr.foo

fooArr()

//explisit
function fooz(name, address) {
    let x = 10;
    console.log(name, address, this.x)
}

console.log("Explisit Function")
// fooz()
const anotherObj = {
    x: 100
}
//Call, parameter tambahan berupa variadic
fooz.call(anotherObj, 'fadley', 'ragunan')

//apply, parameter tambahan berupa array
fooz.apply(anotherObj, ['fadley', 'ragunan'])

//bind, paling sering digunakan
const fadley = fooz.bind(anotherObj, 'fadley', 'ragunan')
fadley();
