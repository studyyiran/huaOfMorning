let {MyPromise} = require('./link')

const expect = (func, content) => {
  if (func && func()) {
    console.log(content)
    return true
  } else {
    console.error(content)
    return false
  }
}

const a = () => {
  const p1 = new MyPromise();
  console.log('start')
  console.log(p1.__proto__)
  const p2 = p1.then((resolve, reject) => {

  })
  const p3 = p2.then()
  expect(() => {
    return p3 instanceof MyPromise
  }, 'is link')
}

const b = () => {
  // MyPromise = Promise;console.log('from promise');
  console.log('1')
  // const p1 = Promise.resolve()
  const p1 = new MyPromise((resolve) => {
    console.log('run')
    resolve('p1 is best')
  });
  console.log('2')
  const p2 = p1.then((value) => {
    console.log('get it' + value)
    return 123
    // return Promise.resolve();
  })
  console.log('3')
  const p3 = p2.then((value) => {
    console.log('p3 get it' + value)
    return new Promise(() => {})
  })
  p3.then((value) => {
    console.log('p4 get' + value)
  })
  console.log('4')
}

/*
调用promise是唯一能够修改promise状态的方法
说明。。。
 */

b()

const c = () => {
  MyPromise = Promise
  console.log('1')

  const p1 = new MyPromise((resolve) => {
    console.log('2')
    resolve(1)
  }).then(() => {
    console.log('6')
    return Promise.reject('2')
  })
  console.log('3')
  // const p2 = p1
  console.log('4')
  setTimeout(() => {
    console.log('7')
    p1.then(() => {
      console.log('8')
    })
  }, 0)
  console.log('5')
}

// c()


/*
then是个慢性子。她运筹帷幄
其实如果她是个快性子，程序的运行结果就会很奇怪。

但是它比time快
 */


/*
我先是写完了。
然后我在解决返回值赋值问题。
饭后我看了原生的规律

然后我卡住了。

我在想，究竟promise内部有没有替代的机制呢？
这个我想不出来了就


我在犹豫，是继续想呢?
还是去看呢？

我决定再想最后3分钟


我还是不服气。
我决定使用笔和纸，最大化一下思考

我肯定是卡在某个范式了。我其实觉得看一下比较好


我想不出来。
我不理解，为什么一次性写完，和多个写，凝固状态会有区别

然后我浏览了lucas的教程。
我没找到东西。
但是我把源码复制了。


然后我自己又跑了下。

我发现可能自己理解错了

我发现。

17号继续搞。
额。看起来快了
上午3小时之后，思路又卡住了。

我决定。。。先去思考一下。试一下
 */