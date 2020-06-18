let {MyPromise} = require('./myPromise')
const savePromise = Promise
Promise = null
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

const t0 = () => {
    const p1 = new Promise((resolve, reject) => {
        resolve()
    })

}

const t1 = () => {
    const p1 = new MyPromise((resolve, reject) => {
        setTimeout(() => {
            reject('gegege')
        }, 1000)
    })
    const p2 = p1.then(function () { }, undefined).then({}, function (e) {
        console.log(e)
    })
    const p3 = p2.then(() => {
        console.log('get it2')
    })

}

const t3 = () => {
    const test = MyPromise
    // const test = savePromise
    // const p1 = new savePromise((resolve, reject) => {
    const p0 = new test((resolve, reject) => {
        setTimeout(() => {
            resolve('p0')
        }, 2000)


    })
    const p1 = new test((resolve, reject) => {
        setTimeout(() => {
            resolve(123)
        }, 100)
    })
    const p2 = p1.then(() => {
        return () => {
            console.log('hehe?')
        }
    }, null)
    p2.then((v) => {
        console.log(v)
    })

}

const t2 = () => {
    // const p1 = new savePromise((resolve, reject) => {
    const p1 = new MyPromise((resolve, reject) => {
        console.log('get it')
        reject('hehe')
        // setTimeout(() => {
        //     reject('hehe')
        // }, 100)
    })
    const p2 = new MyPromise((reject) => {
        reject('miao')
    })
    p1.then(() => {

    }, (v) => {
        console.log('1')
        console.log(v)
    });
    p1.then(() => {

    }, (v) => {
        console.log('2')
        throw('miao')
    }).then(() => {

    }, () => {});
    p1.then(() => {

    }, (v) => {
        console.log('3')
        console.log(v)
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

if (true) {
    // t1('缺省')
    t3('缺省2')
    // t2('fail chain')
} else {
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
}




/*

为什么then的后面是value 不是resolve，reject
 */