
/*
构造函数+原型模式
 */

function a (name) {
  this.name = name
  if (!this.log) {
    console.log('run')
    a.prototype.log = function () {
      console.log(this.name)
    }
  }
}

const a1 = new a(1)
const a2 = new a(2)
const a3 = new a(3)
console.log(a1.log === a2.log)



/*
私密形式

这个和redux的方式是相同的。
他的特点是，返还的也是一个对象。
他的优点是。。。私密。

关于单例这个问题。我个人觉得redux是可以有很多的。
我测试了发现不一定需要单例。

我觉得不new挺好的

new有两个事情，他办不到
1）instanceof
2）也是类似的。他没办法通过修改原型链，重做原型链。它所有的方法都是独立的。


我有一个拙劣的理解。
组合模式，适合有很多实例。实例共享func
稳妥模式，适合很少的实例。每个实例各自持有自己的function。使用闭包维护属性值（其实这是加强版的构造函数模式）

稳妥模式，其实是反抗实例成员还有this的，他不需要this。

但是稳妥模式，其实也暴露了闭包的最大风险。
就是他的内存风险。
其实你只要store = null就ok了。解除掉引用。他就会被回收掉

如果我们只是心情好的时候拉出来一个。那很快就废了。

其实new也有类似的问题。
但是new占的空间多少小一点。
 */
process.exit(1)
function simi(config, func) {

  const arr = []
  return {
    push: function (value) {
      func()
      arr.push(value)
    },
    get: function () {
      return arr.map((value) => {
        return config.name + value
      }).join('hah')
    }
  }
}

let config = {
  name: 'yiran'
}
let func = function () {
  console.log(123)
}
const obj = simi(config, func)
func = function () {
  console.log(456)
}
obj.push(1)
obj.push(2)
obj.push(3)

config = {
  name: 'cindy'
}
console.log(obj.get())
