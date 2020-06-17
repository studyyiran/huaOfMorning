/*
实现bind
 */

// return <div onClick={this.haha.bind(this)}></div>

function myBind(func, obj) {
    // 使用call实现。
    return function (...arg) {
        func.call(obj, arg)
    }
}


function c (name) {
    this.name = name
    this.log = function () {
        console.log(this.name)
    }
}


/*
给构造函数使用，不能生效。这个ok的
给箭头函数，不生效，这个ok的
 */

const testobj = {
    name: 'testobj'
}

// const target = c.bind(testobj)
const target = myBind(c, testobj)

const a1 = new target('hello')
console.log(a1)
a1.log() //hello
console.log(testobj) // testobj