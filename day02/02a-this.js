// let x = 20
//
// const myObj = {
//     x: 50,
//     foo: function () {
//         console.log(this.x)
//     }
// }
//
// myObj.foo()
//
// const foo = myObj.foo
// foo()

//explisit
function foo(name, address) {
    let x = 10;
    console.log(name, address, this.x)
}

foo()
const anotherObj = {
    x: 100
}
//Call, parameter tambahan berupa variadic
foo.call(anotherObj, 'fadley', 'ragunan')

//apply, parameter tambahan berupa array
foo.apply(anotherObj, ['fadley', 'ragunan'])

//bind, paling sering digunakan
const fadley = foo.bind(anotherObj, 'fadley', 'ragunan')
fadley();
