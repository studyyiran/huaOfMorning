/*
1 冒泡排序
需要执行1-n2次
swap n方次的运气冒泡。

 */

// function maopao(arr) {
//     var done = false
//     // 这种某种抽象。让我们外部不关心swap的细节
//     function swap(index) {
//         // 执行的时候，能拿到，那叫作用链域
//         // 函数销毁后 还能拿到 那叫闭包
//         var linshi = arr[index]
//         arr[index] = arr[index + 1]
//         arr[index + 1] = linshi
//     }
//     for (var i = 0; i < arr.length; i++) {
//         console.log('current is' + i)
//         var haveChange = false
//         for (var j = 0; j < arr.length - i - 1;j++) {
//             if (Number(arr[j]) > Number(arr[j + 1])) {
//                 haveChange = true
//                 swap(j)
//             }
//         }
//         if (!haveChange) {
//             break;
//         }
//     }
//     return arr
// }
//
// console.log(5.0 === 5)
// console.log(5.0 > 5)
// console.log(5.0 < 5)
//
// const arr1 = [1,2, '5.00',3,4,5,6,'6', '5.0', '5.000', '6']
// const log = console.log
// log(maopao(arr1.map((item) => String(item))))
// log(xuanze(arr1.map((item) => Number(item))))
//
// /*
// 算法一般来说，事先想好。
// 而题目是边做边有思路
//  */
//
// /*
// swap n次的笨笨排序。最慢的排序算法。
//  */
//
// function xuanze(arr) {
//     function swap(a, b) {
//         var linshi = arr[a]
//         arr[a] = arr[b]
//         arr[b] = linshi
//     }
//     for (var i = 0; i < arr.length; i++) {
//         let minIndex = i
//         for (var j = i; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j
//             }
//         }
//         if (i !== minIndex) {
//             swap(i, minIndex)
//         }
//     }
//     return arr
// }

//
// function haha(l,m,r) {
//     function test(v) {
//         return -1 * ((v - 10.501) * (v - 10.501))
//     }
//     const lValue = test(l)
//     const mValue = test(m)
//     const rValue = test(r)
//     if (lValue >= rValue && mValue >= rValue) {
//         return false
//     } else {
//         return true
//     }
// }
// function erfen(arr) {
//     let time = 0
//     while(arr.length > 1) {
//         time++
//         console.log(time)
//         let left = arr[0]
//         let midIndex = Math.floor(arr.length / 2)
//         let mid = arr[midIndex]
//         let right = arr[arr.length - 1]
//         const isRight = haha(left, mid, right)
//         if (isRight) {
//             if (arr.length === 2) {
//                 arr = arr[1]
//             } else {
//                 arr = arr.slice(midIndex)
//             }
//
//         } else {
//             if (arr.length === 2) {
//                 arr = arr[0]
//             } else {
//                 arr = arr.slice(0, midIndex + 1)
//             }
//         }
//     }
//     console.log(time)
//     return arr
//
// }
// let testArr = []
// for (let i = -108; i < 51; i++) {
//     testArr.push(i)
// }
//
// console.log(erfen(testArr))

function erfensearch1(arr, target) {
    let left = 0;
    // 这个为什么不需要arr.length - 1?
    let right = arr.length

    while(left <= right) {
        let mid = Math.ceil((left + right) / 2)
        if (arr[mid] === target) {
            return mid
        } else {
            if (target < arr[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }

    }
}

/*
逼近和二分查找。看起来有类似。实际上不一样。
逼近需要去比较。

查找仅需要关心中心元素

他们的共同点是，每一次都需要做决定
 */
function erfensearch2(arr, target) {
    let left = 0;
    let right = arr.length - 1
    function getValue(test) {
        return Math.abs(test - target)
    }
    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        let current = arr[mid]
        let valueMid = getValue(current)
        if (valueMid === 0) {
            return mid
        } else {
            let valueLeft = getValue(arr[left])
            let valueRight = getValue(arr[right])
            if (valueLeft < valueRight) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }

    }
}

console.log(erfensearch2([1,4,6,7,8], 5))
// console.log(erfensearch2([1,1,1,1,1,1,1,2,100], 5))