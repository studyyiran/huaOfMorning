function Member (name) {
    this.name = name;
    this.friends = [];
    function _inNetwork(other) {
        // this is a

        let result = false
        const arrOfA = []
        hehe(this, arrOfA)
        if (arrOfA.indexOf(other) !== -1) {
            result= true
        }
        console.log(result)
        return result
    }
    if (!Member.prototype.inNetwork) {
        Member.prototype.inNetwork = _inNetwork
    }
}



var a = new Member('Alice');
var b = new Member('Bob');
var c = new Member('Carol');
var d = new Member('Dieter');
var e = new Member('Eli');
var f = new Member('Fatima');

a.friends.push(b);
b.friends.push(c);
c.friends.push(e);
d.friends.push(b);
e.friends.push(d, f);

// console.log(a)
// console.log(b)
// console.log(c)


// inNetwork(a, c)

const haveFind = []
function hehe(a, arr) {
    a.friends.forEach((friendOfA) => {
        // 不在数组里面
        if (arr.indexOf(friendOfA) === -1) {
            // 1 放进去
            arr.push(friendOfA)
            // 2 递归
            hehe(friendOfA, arr)
        } else {

        }
    })
}




function inNetwork(a, b) {
    const arrOfA = []
    const arrOfB = []
    hehe(a, arrOfA)

    // a是否在b中
    let result = false
    if (arrOfA.indexOf(b) !== -1) {
        result= true
    }
    hehe(b, arrOfB)
    if (arrOfB.indexOf(a) !== -1) {
        result= true
    }
    console.log(result)
    return result
}

// hehe(lucas, haveFind)
// console.log(haveFind)

// inNetwork(f, a)

a.inNetwork(f);
f.inNetwork(a);