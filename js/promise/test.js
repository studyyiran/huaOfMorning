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

b()


/*
then是个慢性子。她运筹帷幄
其实如果她是个快性子，程序的运行结果就会很奇怪。
 */
