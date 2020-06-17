const {MyPromise} = require('./v2')

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
        console.log('run p2')
        return new MyPromise((resolve) => {
            setTimeout(() => {
                console.log('timer')
                resolve('is promise')
            }, 1000)
        });
    })
    const p3 = p2.then((value) => {
        console.log('run p3')
        console.log(value)
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
            reject('resolve string')
        }, 1000)

        resolve('resolve string')
    })
    const p2 = p1.then(() => {
        console.log('get 1')
    }, () => {
        console.log('get 2')
    })
    const p3 = p2.then(() => {
        console.log('get 3')
    }, () => {
        console.log('get 4')
    })

}



// a('Test then is still promise ? ')
// b('then can pass value')
// c('then can pass promise')
// d('then can pass promise')
e('reject')



/*

为什么then的后面是value 不是resolve，reject
 */