let {MyPromise} = require('./myPromise')

// Promise = MyPromise
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
        return 'is string'
        // return Promise.resolve();
    })
    const p3 = p2.then((value) => {
        console.log('get it 2 ' + value)
    })
}


const c = () => {
    Promise = MyPromise
    const p1 = new MyPromise((resolve) => {
        console.log('run p1')
        resolve('string')
    })
    const p2 = p1.then((value) => {
        console.log('1get '+  value);
        return new MyPromise((resolve, reject) => {
            setTimeout(() => {
                reject('123')
            }, 1000)
        })
        // return new MyPromise((resolve) => {
        //     setTimeout(() => {
        //         console.log('timer1')
        //         resolve('is promise1')
        //     }, 1000)
        // }).then((value) => {
        //     console.log('2get '+  value);
        //     return new MyPromise((resolve2) => {
        //         setTimeout(() => {
        //             console.log('timer2')
        //             resolve2('is promise2')
        //         }, 1000)
        //     })
        // })
    })
    const p3 = p2.then((value) => {
        console.log('3get ');
    }, (err) => {
        console.log('4get ');
        // console.error(err)
    })
}

const d = () => {
    const p1 = new MyPromise((resolve) => {
        console.log('run p1')
        resolve('string')
    })
    setTimeout(() => {
        p1.then((value) => {
            console.log('get')
            console.log(value)
        })
    }, 1000)
}

const e = () => {
    const p1 = new MyPromise((resolve, reject) => {
        console.log('run p1')
        setTimeout(() => {
            resolve('resolve string')
        }, 1000)

        reject('reject string')
    })
    const p2 = p1.then((value) => {
        console.log(value)
        console.log('get 1')
    }, (value) => {
        console.log(value)
        console.log('get 2')
        return '2 continue'
    })
    const p3 = p2.then((value) => {
        console.log(value)
        console.log('get 3')
    }, (value) => {
        console.log(value)
        console.log('get 4')
    })
}


const f = () => {
    const p1 = new MyPromise((resolve, reject) => {
        console.log('run p1')
        setTimeout(() => {
            reject('reject string')
            resolve('resolve string')

        }, 1000)

        // resolve('resolve string')

    })
    const p2 = p1.then((value) => {
        console.log('1get ' + value)
        return new MyPromise((resolve, reject) => {
            setTimeout(() => {
                 console.log('timer')
                resolve('resolve->then->resolve')
                reject('resolve->then->reject')
            }, 1000)
        })
    }, (value) => {
        console.log('2get ' + value)
        return new MyPromise((resolve, reject) => {
            setTimeout(() => {
                console.log('timer')
                // resolve('reject->catch->resolve')
                reject('reject->catch->reject')
            }, 1000)
        })
    })
    const p3 = p2.then((value) => {
        console.log('3get ' + value)
    }, (value) => {
        console.log('4get ' + value)
    })
}

const g = () => {
    const p1 = new MyPromise((resolve, reject) => {
        resolve(new Promise((resolve, reject) => {
            resolve(123)
            reject(456)
        }))
    })
    p1.then((value) => {
        console.log('3get ' + value)
    }, (value) => {
        console.log('4get ' + value)
    })
}

const h = () => {
    const p1 = new MyPromise((resolve, reject) => {
        reject('reject string')
    })
    setTimeout(() => {
        p1.then((value) => {
            console.log('3get ' + value)
        }, (value) => {
            console.log('4get ' + value)
        })
    }, 1000)
}

const i = () => {
    // MyPromise = Promise
    const p1 = new MyPromise((resolve, reject) => {
        setTimeout(() => {
            console.log('timer')
            // reject('error1 ')
            reject(new MyPromise((resolve, reject) => {
                setTimeout(() => {
                    resolve('pass2')
                }, 1000)
            }))
        }, 1000)
    })
    p1.then((value) => {
        console.log('1get' + value)
    }, (value) => {
        console.log('2get' + value)
    }).then((value) => {
        console.log('3get' + value)
    })
}

const j = () => {
    const p1 = new MyPromise((resolve, reject) => {
        resolve(new MyPromise((resolve2, reject2) => {
            setTimeout(() => {
                resolve2(new MyPromise((resolve3, reject3) => {
                    setTimeout(() => {
                        reject3('你输了')
                    }, 600)
                }))
            }, 500)
        }))
        resolve(new MyPromise((resolve, reject2) => {
            setTimeout(() => {
                reject2('马后炮')
            }, 1000)
        }))
    })
    p1.then((v) => {
        console.log(v)
    }, (v) => {
        console.error(v)
    })


}

const k1 = () => {
    Promise = MyPromise
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('lucas')
        }, 2000)
    })

    promise.then(data => {
        console.log(data)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`${data} next then`)
            }, 4000)
        })
    })
        .then(data => {
            console.log(data)
        })
}

const k2 = () => {
    Promise = MyPromise
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('lucas')
        }, 2000)
    })

    promise.then(data => {
        console.log(data)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`${data} next then`)
            }, 2000)
        })
            .then(data => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(`${data} next then`)
                    }, 2000)
                })
            })
    })
        .then(data => {
            console.log(data)
        })
}


// a('Test then is still promise ? ')
// b('then can pass value')
// c('then can pass promise')
// d('then can pass promise')
// e('reject')
// f('complex')
// g('双开')

// h('突然rejecr')
// i('free style')
// j('已经决定，但是吃了个proimse')
// k1('lucas final1')
// k2('lucas final2')

var promisesAplusTests = require("promises-aplus-tests");

const deferred = () => {
    let resolve
    let reject
    let promise = new MyPromise((a, b) => {
        resolve = a
        reject = b
    })
    return {
        resolve,
        reject,
        promise
    }
}

promisesAplusTests({deferred}, function (err) {
    // All done; output is in the console. Or check `err` for number of failures.
});


/*

为什么then的后面是value 不是resolve，reject
 */