/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
console.log('start')
var twoSum = function(nums, target) {
    /*
    遍历两次n2
    先排序 logn。
    如果有负数。
    先遍历所有的负数。

    没有负数。

    二分查找。找到小于 并且 最接近的那个地方。
    然后再去遍历。
    遍历的时候 先计算出来差值。然后用二分去找。


    先转成hash。并记录isTwice
    然后看看有没有负数。
    如果有。
    先解决掉所有的负数。
    有负数其实也没有关系

    如果没有负数。
    从第一个元素还是n遍历

    */
    const m1 = new Map()
    // n
    // 做人留一线 日后好相见。
    nums.forEach((key, index) => {
        const target = m1.get(key)
        if (target) {
            m1.set(key, {
                index: [...target.index, index]
            })
        } else {
            m1.set(key, {
                index: [index]
            })
        }
    })
    // n
    /*
    1)如何格式化
    2）如何在forEach里面中断
    */
    let answer
    for (let [key, value] of m1) {
        const needTarget = target - key;

        const tryFindItem = m1.get(needTarget)

        if (tryFindItem !== undefined) {
            // 两者不幸相同了
            if (needTarget === key) {
                if (tryFindItem.index.length > 1) {
                    answer = tryFindItem.index.slice(0,2)
                    break;
                }
            } else {
                answer = [value.index[0], tryFindItem.index[0]]
                break;
            }
        }
    }

    // m1.forEach((key, value) => {
    //     if (!answer) {
    //         const needTarget = target - key;
    //
    //         const tryFindItem = m1.get(needTarget)
    //
    //         if (tryFindItem !== undefined) {
    //             if (needTarget === key) {
    //                 if (tryFindItem) {
    //                     answer = [key, needTarget]
    //                 }
    //             } else {
    //                 answer = [key, needTarget]
    //             }
    //         }
    //     }
    // })
    console.log(answer)
    return answer
};

twoSum([2,2,2,2,2,11,15], 4)