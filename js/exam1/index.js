

const arr = []
const answerArr = [
    [1,3,4],
]


function func(root, number = []) {
    if (root.left) {
        arr.push(root.value)
        func(root.left, arr)
    }

    if (root.right) {
        arr.push(root.value)
        func(root.right, arr)
    }
    //
    if (root && !root.left && !root.right) {
        answerArr.push(arr)
    }
}

function run() {
    const root
    func(root)
}

const root = {
    left: root2,
    right: root3,
    value: 3
}
