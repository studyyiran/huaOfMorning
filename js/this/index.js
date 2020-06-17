// function magic(name) {
//      return {
//          name: name,
//          log: function () {
//              console.log(this)
//          }
//      }
// }
//
// const magicobj = {
//     name: 'magicobj',
//     log: function () {
//         console.log(this)
//     }
// }
//
// const get1 = magic('1')
// get1.log()
//
// const get2 = magic('2')
// get2.log()
//
//
// magicobj.log()


function foo (a) {
    this.a = a
}

const obj1 = {}

var bar = foo.bind(obj1)
bar(2)



var baz = new bar(3)
console.log(baz.a)
console.log(obj1.a)