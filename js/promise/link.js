function MyPromise() {
  console.log(this);
  function _resolve() {

  }

  function _reject() {

  }
  // 在哪里定义静态方法呢？
  function then(callback) {
    callback && callback(_resolve, _reject)
    return this
  }

  if (typeof this.then !== "function") {
    MyPromise.prototype.then = then
    // MyPromise.prototype.then = then
    console.log(MyPromise.prototype)
  }

}

module.exports = {
  MyPromise
}

