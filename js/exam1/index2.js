function getObjectValueAt(object, key) {
    // todo
    function getArrOfKey(string) {
        return string.replace('[', '').replace(']', '').split('.')
    }

    // 1
    const arr = getArrOfKey(key)
    function func(arr) {
        for (let i = 0 ; i < arr.length; i++) {
            if (o && o[arr[i]]) {
                o = o[arr[i]]
            } else {
                o = null
                break
            }
        }
    }
    // 2
    let o = object
    func(arr)
    return o
}

var object = { 'a':
        [{ 'b': { 'c': 3 } }, 4] };

console.log(getObjectValueAt(object, 'a[0].b[1].c.x')); // 3