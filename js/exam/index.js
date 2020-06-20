/**
 有一系列数组叫extensions，其中的元素结构如下
 {firstName: 'xxx', lastName: 'xxx', ext: 'xxx', extType: 'xxx'}
 lastName, ext 可以为空, extType 只能是这几种： "DigitalUser", "VirtualUser","FaxUser","Dept","AO".
 **/

/**
 Q1: 对extensions进行排序，根据"firstName" + "lastName" + "ext"这个组合增序
 **/
function sortExtensionsByName(extensions) {
    // a b c叫做增序 比较字符串
    function getString(obj) {
        return obj.firstName + obj.lastName + obj.ext;
    }
    return extensions.sort((a, b) => {
        return a.firstName.localeCompare(b.firstName)
    })
}

const arr = [
    {firstName: 'a', lastName: 'b', ext: 'xxx', extType: 'xxx'},
    {firstName: 'a', lastName: 'a', ext: 'xxx', extType: 'xxx'},
    {firstName: 'c', lastName: 'xxx', ext: 'xxx', extType: 'xxx'},
    {firstName: 'd', lastName: 'xxx', ext: 'xxx', extType: 'xxx'},
    {firstName: 'd', lastName: 'xxx', ext: 'xxx', extType: 'xxx'},
    {firstName: 'd', lastName: 'xxx', ext: 'xxx', extType: 'xxx'},
    {firstName: 'd', lastName: 'xxx', ext: 'xxx', extType: 'xxx'},
    {firstName: 'd', lastName: 'xxx', ext: 'xxx', extType: 'xxx'},
]

console.log(sortExtensionsByName(arr))


/**
 Q2: 根据extType进行排序，顺序依照下面的规则，增序
 DigitalUser < VitrualUser < FaxUser < AO < Dept.
 **/
function sortExtensionsByExtType(extensions) {
    const getRankValue = [
        'DigitalUser','VitrualUser','FaxUser','AO','Dept'
    ]
    return extensions.sort((a,b) => {
        return getRankValue.indexOf(a.extType) - getRankValue.indexOf(b.extType)
    })
}


/**
 saleItems也是一个数组，元素形式如下：
 {
month: n, //[1-12],
date: n, //[1-31],
transationId: "xxx",
salePrice: number
  }
 **/

/**
 Q3: 写一个函数，计算每个季度的*总*销售额，输出格式如下，其中quater为第几季度，transactionNums为数量
 [
 {quarter: 1, totalPrices: xxx, transactionNums: n},
 {....}
 ]
 **/


function sumByQuarter(saleItems) {
    function getQuarter(month) {
        return Math.ceil(month / 3)
    }
    let arr = [1,2,3,4].map((quarter) => {
        return {
            quarter,
            totalPrices: 0,
            transactionNums: 0
        }
    })
    function insert(quarter, price) {
        arr[quarter - 1].totalPrices = arr[quarter - 1].totalPrices + price;
        arr[quarter - 1].transactionNums = arr[quarter - 1].transactionNums + 1;
    }
    saleItems.forEach((item) => {
        const {month, salePrice} = item
        const quarter = getQuarter(month)
        insert(quarter, salePrice)
    })
    return arr
}

/**
 Q4: 写一个函数，计算每个季度的*平均*销售额，输出格式如下，其中quater为第几季度，transactionNums为数量
 [
 {quarter: 1, averagePrices: xxx, transactionNums: n},
 {....}
 ]
 **/

function averageByQuarter(saleItems) {
    sumByQuarter(saleItems).map(({quarter, totalPrices, transactionNums}) => {
        return {
            quarter,
            averagePrices: totalPrices / transactionNums,
            transactionNums,
        }
    })
}


/**
 Q5: 写一个类Sequence，用于生成连续的号码，用法如下：

 var sequence1 = new Sequence();
 sequence1.next() --> return 1;
 sequence1.next() --> return 2;

 在另一个模块中:
 var sequence2 = new Sequence();
 sequence2.next() --> 3;
 sequence2.next() --> 4;
 **/
function Sequence() {
    function _next() {
        let now = 0;
        return (() => {
            now = now + 1;
            return now
        })()
    }
    if (!Sequence.prototype.next) {
        Sequence.prototype.next = _next
    }
}



/**
 Q6:
 allKeys: 是一个包含全部数字的数组，例如[0,1,2,3,4,5,6,7,8,9];
 usedKeys: 是一个包含已使用的数字的数组，例如[2,3,4];
 实现一个函数，返回包含所有未使用过的数字的数组，比如在这个例子中是[0,1,5,6,7,8,9]
 **/

function getUnUsedKeys(allKeys, usedKeys) {
//TODO
    return allKeys.filter((item)=> {
        return usedKeys.indexOf(item) === -1
    })
}

