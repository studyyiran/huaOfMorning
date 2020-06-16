const {MyPromise} = require('./link')

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

a()