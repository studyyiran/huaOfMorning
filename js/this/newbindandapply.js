function myNew() {
    // const arr = Array.slice.call(arguments) 存疑
    const arr = Array.prototype.slice.call(arguments)
    const constructor = arr.shift()
    // 存疑 这说明，我还是没有完全搞懂constructor
    const obj = Object.create(constructor.prototype)
    const returnObj = constructor.apply(obj, arr)
    return typeof returnObj === 'object' ? returnObj : obj
}
//
// function a(name, age) {
//     this.name = name
//     this.age = age
//
//     if (!a.prototype.hello) {
//         a.prototype.hello = function () {
//             console.log(this.name)
//             console.log(this.age)
//         }
//     }
// }
// const b = a.bind({
//     age: '???',
//     name: '???'
// })
//
// // const a1 = myNew(b, '123',18)

//
// console.log(a1.__proto__)
// a1.hello()
//
// Function.prototype.bind = Function.prototype.bind || function (context) {
//     var me = this;
//     var args = Array.prototype.slice.call(arguments, 1);
//     var F = function () {};
//     F.prototype = this.prototype;
//     var bound = function () {
//         var innerArgs = Array.prototype.slice.call(arguments);
//         var finalArgs = args.concat(innerArgs);
//         return me.apply(this instanceof F ? this : context || this, finalArgs);
//     }
//     bound.prototype = new F();
//     return bound;
// }
//
//
// Function.prototype.myBind = Function.prototype.myBind || function () {
//     const func = this
//     const arr = Array.prototype.slice.call(arguments);
//     const context = arr.shift()
//     return function hehe() {
//         // 如果你传给我的this 和我这个函数一样
//         if (this instanceof hehe) {
//             return func.apply(this, [...arr, ...arguments])
//         } else {
//             return func.apply(context, [...arr, ...arguments])
//         }
//     }
//
// }
//
// function b (name, age, id) {
//     this.name = name
//     this.age = age
//     this.id = id
//
// }
// const out = {name: 'hehe'}
// const myb = b.myBind(out, 'miaowu', '99')
//
// const b1 = new myb('haha', 18, '108')
// console.log(b1)
// console.log(out)
//
// Function.prototype.myCall = Function.prototype.myCall || function (...arr) {
//     const context = arr.shift();
//     const func = this;
//     context.__run__ = func
//     return context.__run__(...arr)
// }
//
// function c () {
//     console.log(this.name)
// }
//
// c.myCall({name: 'hehe'})