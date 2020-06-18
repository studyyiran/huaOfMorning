
function myWindow() {
    function myFunc() {
        window.setTimeout(function () {
            try {
asdmadkadska
            } catch(e) {

            }

        }, 0)


    }
    try {
        myFunc()
        console.log('33')
    } catch(e) {

    }

}

console.log('123123')
try {
    console.log('11')
    myWindow()
    console.log('22')
} catch(e) {
    console.log('get it')
    console.error(e)
}

//
// const p1 = new Promise((resolve, reject) => {
//     function a() {
//         asdasd
//     }
//     a()
//     resolve()
// }).then(() => {
//
// }, () => {
//     console.log('hehe')
//     return new Promise((resolve, reject) => {
//         // aldkfla
//         try {
//             setTimeout(() => {
//                 aldkfla
//             }, 1000)
//         } catch(e) {
//             reject(e)
//         }
//     })
// }).then(() => {
//     console.log('1')
// }, () => {
//     console.log('2')
// })