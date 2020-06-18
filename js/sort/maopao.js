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



function  erfen2(sortArr) {
    function swap(arr, a, b) {
        const linshi = arr[b];
        arr[b] = arr[a]
        arr[a] = linshi
    }
    for (let i = 0; i < sortArr.length; i++) {
        let restArr = sortArr.slice(i).map((item, index) => {
            return {
                value: item,
                index: index
            }
        });
        let haveFind = false
        while(!haveFind) {
            const testMin = restArr[0];
            let minArr = []
            for (let j = 0 ;j < restArr.length; j++) {
                if (restArr[j].value < testMin.value) {
                    minArr.push(restArr[j])
                }
            }
            if (minArr.length === 0) {
                haveFind = testMin
            } else {
                restArr = minArr
            }
        }
        if (haveFind) {
            swap(sortArr, i, i + haveFind.index)
        }
    }
    return sortArr
}

const test = [
    [1,1,1],
    [1,2,3],
    [1],
    [1,2],
    [1,2,3],
    [3,2,1],
    [3,2,2,3,2,3,2,3,2,1,1,2,21,2,1],
    [1,3,6,9,5,6,56,5,23,67,35,1324,567,6,7,367,568,7,8,56,34,52,345,457,8,567,],
    [1,5,67,4,6,8,7,5,3,5,6,7,8,9,8,7,5,3,2,4,5,6,7,8,9,6,6,4,3,3,45,5,6,7,8,]

]
const biaozhun = test.map((arr) => {
    let func = maopao
    return func(arr)
})
const afterSortArr = test.map((arr) => {
    let func = erfen2
    return func(arr)
})
console.log(afterSortArr)
console.log(JSON.stringify(biaozhun) === JSON.stringify(afterSortArr))

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

/*
排序有几个常规问题
1）等于怎么办
2）从大王小，还是从小王大（从小到大）


3)你每一次找最小，还是找最大，（找最小）
4)怎么在排序的时候，剔除筛选掉的元素？

5)写完了之后，debug的速度明显比脑袋看打log快多了。不要打log debug，就用断点
6）如何swap
7）如何写case
 */