function maopao(arr) {
    function swap(a, b) {
        const linshi = arr[b];
        arr[b] = arr[a]
        arr[a] = linshi
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++ ) {
            if (arr[i] > arr[j]) {
                swap(i, j)
            }
        }

    }
    return arr
}

function erfen(needSortArr) {
    let sortArr = []
    let copyArr = [...needSortArr]
    function findMost(arr) {
        console.log('arr')
        console.log(arr)
        if (arr.length <= 2) {
            if (arr.length === 1) {
                return 0
            } else {
                if (copyArr[arr[0]] < copyArr[arr[1]]) {
                    return arr[0]
                } else {
                    return arr[1]
                }
            }
        }
        const mid = Math.floor(arr.length / 2)
        const linshi = []
        for (let i = 0; i < arr.length; i++) {
            if (copyArr[i] < copyArr[mid]) {
                linshi.push(i)
            }
        }
        return findMost(linshi)
    }
    while(sortArr.length !== needSortArr.length) {
        const currentIndex = findMost(copyArr.map((item, index) => index))
        console.log(copyArr[currentIndex])
        sortArr.push(copyArr[currentIndex])
        copyArr.splice(currentIndex, 1)
        console.log('copyArr')
        console.log(copyArr)
    }
    console.log(sortArr)
    return sortArr
}

const test = [
    [2,3,5,7,8,5,4]
]
const afterSortArr = test.map((arr) => {
    let func = erfen
    return func(arr)
})
console.log(afterSortArr)

/*
7,6,5,4,3,2,1

6,7,5,4,3,2,1

5,7,6,4,3,2,1
...


1,7,6,5,4,3,2,1


1,6,7,5,4,3,2
 */


/*

最值法 需要比较
n + n - 1 + n - 2 ... 1
 */



/*
冒泡需要比较，。。是一样的。

我没感觉冒泡会少比较。
 */