const promiseStatus = {
  resolved: 'resolved'
}

function MyPromise(runNowFunc) {
  let status
  let thenArr = []
  function _resolve() {
    // 1.变更
    status = promiseStatus.resolved
    // 2.触发回调
    thenArr.forEach((func) => {
      func(_resolve, _reject)
    })
  }

  function _reject() {

  }

  function _then(callback) {
    if (status === promiseStatus.resolved) {
      callback && callback(_resolve, _reject)
    } else {
      thenArr.push(callback)
    }
    return this
  }

  if (typeof this.then !== "function") {
    MyPromise.prototype.then = _then
    // MyPromise.prototype.then = then
  }
  runNowFunc(_resolve, _reject)
}

module.exports = {
  MyPromise
}

