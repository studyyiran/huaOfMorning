/*
9:15
 */


function MyPromise(func) {
    this.status = 'padding'


    this.thenArr = []

    this.promiseValue = undefined

    function _then(whenResolveRunTheFunc) {
        //
        const thenBackPromise = new MyPromise(function (resolve, reject) {
            this.thenArr.push(function (pValue) {
                // 为了then内在的东西要执行
                const thenReturnValue = whenResolveRunTheFunc(pValue)
                console.log(thenReturnValue)
                // 为了then后面的
                // resolve(thenReturnValue)
            })
        })
        return thenBackPromise
    }

    function _outCallMeReject() {

    }

    // 这是唯一可以改变状态的
    function _outCallMeResolve(resolveValue) {

        function init() {
            // 首先变更状态
            this.status = 'resolve';
            // 修改数值
            this.promiseValue = resolveValue
            // 然后执行then的回调
            setTimeout(function () {
                this.thenArr.forEach(function (func) {
                })
            })
        }

        // (如果是promise呢？)那我应该尊重他
        if (resolveValue instanceof MyPromise) {
            console.log('get it1')
            // 等你完成后，我再变更状态
            resolveValue.then(function () {
                init()
            })
        } else {
            console.log('get it2')
            init()
        }
    }

    if (!MyPromise.prototype.then) {
        MyPromise.prototype.then = _then
    }
    try {
        func(_outCallMeResolve,  _outCallMeReject)
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
        console.log('2')
        resolve('p1 is best')
    });
    const p2 = p1.then((value) => {
        console.log('get it' + value)
        // return new Promise(() => {
        //
        // })
        return 'is p1.then'
        // return Promise.resolve();
    })
    const p3 = p2.then((value) => {
        console.log('get it' + value)
        return 'is p2.then'
        // return Promise.resolve();
    })
}

// a('Test then is still promise ? ')
b('Test then is still promise ? ')
/*
1
 */