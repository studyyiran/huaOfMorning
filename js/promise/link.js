const promiseStatus = {
  resolved: 'resolved'
}

function MyPromise(runNowFunc) {
  let status
  let thenArr = []
  let promiseResult
  function _resolve(result) {
    setTimeout(() => {
      _saveResult(result)
      // 1.变更
      status = promiseStatus.resolved
      // 2.触发回调
      thenArr.forEach((func) => {
        func(promiseResult)
      })
    },0)
  }

  function _reject() {

  }

  function _saveResult(result) {
    if (result instanceof MyPromise) {

    } else {
      promiseResult = result
    }
  }

  function _then(callback) {
    thenArr.push(callback)
    // if (status === promiseStatus.resolved) {
    //   if (callback) {
    //     _saveResult(callback(promiseResult))
    //   }
    // } else {
    //   thenArr.push(callback)
    // }
    return this
  }

  if (typeof this.then !== "function") {
    MyPromise.prototype.then = _then
    // MyPromise.prototype.then = then
  }
  try {
    runNowFunc(_resolve, _reject)
  } catch(e) {
    console.error(e)
    console.error('u must have')
  }

}

module.exports = {
  MyPromise
}

