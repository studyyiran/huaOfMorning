/*
我从new开始

new的几件事
1）新建对象
2）将他的__proto__引导向构造函数
3）返回obj为this
4) 通过this进行赋值
5）然后返还

这块return有一些特殊情况
 */

function funca(name) {
    this.name = name
}

funca.prototype.log = function() {
    console.log(this.name)
}

function myNew() {
    console.log(arguments)
    console.log('mynew')
    // const object = Object.create(constructor)
    const object = {}
    object.__proto__ =[].shift.call(arguments).prototype
    console.log(arguments)
    constructor.apply(object, arguments)
    return object
}

const a1 = new funca('yiran');
console.log(a1 instanceof funca)

const a2 = myNew(funca, 'cindy')
console.log(a2 instanceof funca)
const a3 = myNew(funca, 'yezi')
console.log(a3 instanceof funca)
a1.log()
a2.log()
a3.log()