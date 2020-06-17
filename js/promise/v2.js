/*
9:15
 */

/*
当你需要知道，谁调用的。也就是你希望this是动态的。那你需要通过function

当你不想知道。你确定，this是谁（不需要this也算），哪怕是在调用之前。那你应该用()=>

当你无法使用箭头的时候。（例如，你确实需要适当的动态指定。例如原型方法。）那你就可以替原型方法做主，bind上去
 */


function MyPromise(func) {
    this.status = 'padding'


    this.thenArr = []

    this.promiseValue = undefined

    function _then(whenResolveRunTheFunc) {
        //
        const thenBackPromise = new MyPromise( (resolve, reject) => {
            this.thenArr.push(function (pValue) {
                // 为了then内在的东西要执行
                const thenReturnValue = whenResolveRunTheFunc(pValue)
                // 为了then后面的
                resolve(thenReturnValue)
            })
        })
        return thenBackPromise
    }

    function _outCallMeReject() {

    }

    // 这是唯一可以改变状态的
    function _outCallMeResolve(resolveValue) {
        const init = () => {
            // 首先变更状态
            this.status = 'resolve';
            // 修改数值
            this.promiseValue = resolveValue
            // 然后执行then的回调
            setTimeout(() => {
                this.thenArr.forEach(function (func) {
                    func(resolveValue)
                })
            })
        }

        // (如果是promise呢？)那我应该尊重他
        if (resolveValue instanceof MyPromise) {
            // 等你完成后，我再变更状态
            resolveValue.then( () => {
                init()
            })
        } else {
            init()
        }
    }

    if (!MyPromise.prototype.then) {
        MyPromise.prototype.then = _then
        MyPromise.prototype._outCallMeResolve = _outCallMeResolve
        MyPromise.prototype._outCallMeReject = _outCallMeReject
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



const expect = (func, content) => {
    if (func && func()) {
        console.log(content)
        return true
    } else {
        console.error(content)
        return false
    }
}

const a = (string) => {
    console.log(string)
    const p1 = new MyPromise(() => {});
    const p2 = p1.then((resolve, reject) => {

    })
    const p3 = p2.then().then()
    expect(() => {
        return p3 instanceof MyPromise
    }, 'still promise after then')
}

const b = () => {
    const p1 = new MyPromise((resolve) => {
        console.log('run')
        resolve('p1 is best')
    });
    const p2 = p1.then((value) => {
        console.log('get it 1 ' + value)
        // return new Promise(() => {
        //



        // })
        return 'is p1.then'
        // return Promise.resolve();
    })
    const p3 = p2.then((value) => {
        console.log('get it 2 ' + value)
        return 'is p2.then'
        // return Promise.resolve();
    })
}

// a('Test then is still promise ? ')
b('then can pass ')
/*
1
 */