function myNew() {
    const arr = Array.slice.call(arguments)
    const constructor = arr.shift()
    const obj = Object.create(constructor)
    constructor.apply(obj, arr)
    return obj
}

function a(name, age) {
    this.name = name
    this.age = age

    if (!a.prototype.hello) {

    }
}

myNew(a, '123',18)