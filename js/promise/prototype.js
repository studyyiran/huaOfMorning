const aFather = {
  hello: function (men) {
    console.log('hello ' + men)
  },
  love: function () {
    console.log('love ' + this.name)
  }
}

function test() {
  console.log(this.name)
}

function a(name) {
  this.name = name
}

function b(name, age) {
  this.name = name
  this.age = age
}

a.prototype = aFather

const a1 = new a('yiran');
const a2 = new a('cindy');
a1.hello({name: 'hehe'});
a2.love()
/*

我有一个变量，能借给我一个方法吗？call也太大方了？
她大方不是因为我可以调用他的一个定义在对象上面，暴露的方法。
而是。。。我可以指定this？？？
那我觉得，实际上
funciton内部的this 是内鬼 而call就是外鬼。
没有this，call似乎也没用？
call的精髓在于转变this

这块得去看看kyle的文章。我目前理解，this和call是一对儿。
 */
a1.hello.call(a2, {name: a2.name})

// a2.test()

test.call(a2)


/*
那么其实继承就是一种借用.
他是call的一种简化？？

当然，它本质上是一种延伸
 */


const b1 = new b('18', '018')
const b2 = new b('28', '028')

aFather.hello(b1.name)
aFather.love.call(b)