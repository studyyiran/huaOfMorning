// /*
// 0-1000
//
// [2 3 8 0 2 35]
// 重复就输出。只输出一个。
//  */
// console.log('start')
// function func(arr) {
//     /*
//     找item n
//      */
//     const okArr = []
//     const repeatArr = []
//
//     function testSame(current) {
//         if (okArr.indexOf(current) !== -1) {
//             return true
//         } else {
//             return false
//         }
//     }
//
//     arr.forEach((item) => {
//         if (testSame(item)) {
//             repeatArr.push(item)
//         } else {
//             okArr.push(item)
//         }
//     })
//     // 去重
//     return repeatArr
// }
//
// const arr1 = [1,2,3,3,2,2, 5] // [2,3]
// const answer = func(arr1)
// console.log(answer)


/*
我对hash这个数据结构了解的不够
 */

/*
昨天太紧张了。
但是紧张是因为准备不充足。
如果，你基础，足够扎实。
你根本就不会紧张。因为导师考的东西，你已经做过很多了。
这其实还是一种考查。
 */


function repeatWithHash(arr) {
    const repeat = {}
    const unique = {}
    arr.forEach((key) => {
        if (!unique[key]) {
            unique[key] = true
        } else {
            repeat[key] = true
        }
    })
    return Object.keys(repeat).map((item) => {
        return item
    })
}



function repeatWithMap(arr) {
    const unique = new Map()
    const repeat = new Map()
    arr.forEach((item) => {
        if (unique.has(item)) {
            repeat.set(item, true)
        } else {
            unique.set(item, true)
        }
    })
    // console.log(repeat.values)
    console.log(repeat.keys)
    return repeat.keys
}


console.log(repeatWithMap([1,2,3,3,2,2, 5]))


