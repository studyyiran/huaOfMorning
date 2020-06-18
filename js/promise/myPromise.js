/*
9:15
 */

/*
当你需要知道，谁调用的。也就是你希望this是动态的。那你需要通过function

当你不想知道。你确定，this是谁（不需要this也算），哪怕是在调用之前。那你应该用()=>

当你无法使用箭头的时候。（例如，你确实需要适当的动态指定。例如原型方法。）那你就可以替原型方法做主，bind上去
 */

const nextTick = (func) => {
    setTimeout(func)
}

function MyPromise(func) {
    this.status = 'padding'


    this.thenArr = []
    this.catchArr = []

    this.promiseValue = undefined

    function _transToResolve (_value) {
        if (this.status === 'padding') {
            // 首先变更状态
            this.status = 'resolve';
            // 修改数值
            this.promiseValue = _value
            // 然后执行then的回调
            nextTick(() => {
                this.thenArr.forEach(function (func) {
                    func(_value)
                })
            })
        }

    }

    function _transToReject (_value) {
        if (this.status === 'padding') {
            // 首先变更状态
            this.status = 'reject';
            // 修改数值
            this.promiseValue = _value
            // 然后执行then的回调
            nextTick(() => {
                this.catchArr.forEach(function (func) {
                    func(_value)
                })
            })
        }

    }

    // 这是唯一可以改变状态的
    function _outCallMeResolve(resolveValue) {
        // (如果是promise呢？)那我应该尊重他
        if (resolveValue instanceof MyPromise) {
            // 等你完成后，我再变更状态
            // 我不确定这个promise的状态。所以无论他怎么样 我都需要。。。。继续执行？
            // 这其实是委托。我不知道这个proimse会有什么结果。作为一个resolve家长。我委托给then
            // 如果成了，那我再把我的态度改掉。失败了，我也更改
            resolveValue.then((value) => {
                this._transToResolve(value)
            }, (value) => {
                this._transToReject(value)
            })
        } else {
            this._transToResolve(resolveValue)
        }
    }

    function _outCallMeReject(rejectValue) {
        // (如果是promise呢？)那我应该尊重他
        if (rejectValue instanceof MyPromise) {
            // 等你完成后，我再变更状态
            // 我不确定这个promise的状态。所以无论他怎么样 我都需要。。。。继续执行？
            // reject不太一样。我的态度是，不管你们自己怎么想，我不会同意的
            rejectValue.then((value) => {
                this._transToReject(value)
            }, (value) => {
                this._transToReject(value)
            })
        } else {
            this._transToReject(rejectValue)
        }
    }

    // function getNextPromise(run) {
    //     return new MyPromise((resolve, reject) => {
    //         run(resolve, reject)
    //     })
    // }

    function same() {

    }


    function _then(whenResolveRunTheFunc = () => {}, whenRejectRunTheFunc = () => {}) {
        // 这块需要处理，当then上来的时候，已经是resolve了。
        if (this.status === 'resolve') {
            const p2 = new MyPromise((resolve, reject) => {
                nextTick(() => {
                    // 下一帧将promise的值（this.promiseValue）返还给我then继续执行就ok了，然后你再修改掉这个promise的状态
                    const thenReturnValue = whenResolveRunTheFunc(this.promiseValue)
                    console.log(p2 === thenReturnValue)
                    if (p2 === thenReturnValue) {
                        reject('circle')
                    } else {
                        resolve(thenReturnValue)
                    }

                })
            })
            return p2
        } else if (this.status === 'reject') {
            return new MyPromise((resolve, reject) => {
                nextTick(() => {
                    // 下一帧将promise的值（this.promiseValue）返还给我then继续执行就ok了，然后你再修改掉这个promise的状态
                    const thenReturnValue = whenRejectRunTheFunc(this.promiseValue)
                    // 我爸爸虽然判了死刑。
                    // 然后你访问我爸爸的then
                    // 那你肯定第一步执行死刑的通知书catch
                    // 然后，你是p2 = p1.catch。你的状态是什么，取决于内部值。所以你resolve扔给下一个值（如果是普通值的话，就resolve改命了其实）
                    if (this === thenReturnValue) {
                        reject('circle')
                    } else {
                        resolve(thenReturnValue)
                    }
                })
            })
        } else if (this.status ==='padding') {
            return new MyPromise( (resolve, reject) => {
                if (whenResolveRunTheFunc) {
                    this.thenArr.push(function (pValue) {
                        // 为了then内在的东西要执行
                        const thenReturnValue = whenResolveRunTheFunc(pValue)
                        // 为了then后面的
                        if (this === thenReturnValue) {
                            reject('circle')
                        } else {
                            resolve(thenReturnValue)
                        }
                    })
                }

                if (whenRejectRunTheFunc) {
                    this.catchArr.push(function (pValue) {
                        // 为了then内在的东西要执行
                        const thenReturnValue = whenRejectRunTheFunc(pValue)
                        // 为了then后面的

                        if (this === thenReturnValue) {
                            reject('circle')
                        } else {
                            resolve(thenReturnValue)
                        }
                    })
                }
            })
        }
    }

    if (!MyPromise.prototype.then) {
        MyPromise.prototype.then = _then
        MyPromise.prototype._outCallMeResolve = _outCallMeResolve
        MyPromise.prototype._outCallMeReject = _outCallMeReject
        MyPromise.prototype._transToResolve = _transToResolve
        MyPromise.prototype._transToReject = _transToReject
    }
    try {
        // 这种调用无效居然。哪怕你指了this也没用。
        // func(this._outCallMeResolve,  this._outCallMeReject)
        // bind对于箭头函数是无能为力的
        func(this._outCallMeResolve.bind(this),  this._outCallMeReject.bind(this))
    } catch (e) {
        console.error(e)
    }
}


module.exports = {
    MyPromise
}