//if you forgot to declare a variable with var ,
// JavaScript would merrily assume you were referring to a global variable
// "use strict";
x = 20

const myObj = {
    x: 50,
    foo: function () {
        // Registered as global
        // abc = 10;
        console.log(this.x)
    }
}

myObj.foo()

const foo = myObj.foo
foo()
console.log(global)


//explisit
// function foo(name, address) {
//     let x = 10;
//     console.log(name, address, this.x)
// }
//
// foo()
// const anotherObj = {
//     x: 100
// }
// //Call, parameter tambahan berupa variadic
// foo.call(anotherObj, 'fadley', 'ragunan')
//
// //apply, parameter tambahan berupa array
// foo.apply(anotherObj, ['fadley', 'ragunan'])
//
// //bind, paling sering digunakan
// const fadley = foo.bind(anotherObj, 'fadley', 'ragunan')
// fadley();
