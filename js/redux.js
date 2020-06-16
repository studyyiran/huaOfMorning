const {createStore} = require('redux')

function reducer1(state, action) {
    console.log(action)
    const {value, type} = action
    if (type === 'add') {
        console.log('get')
        const obj = {...state, value: state.value + value}
        console.log(obj)
        return obj
    }
    return {...state}
}

const store1 = createStore(reducer1, {value: 100})
const store2 = createStore(reducer1, {value: -100})


function getAction() {
    return {
        type: 'add',
        value: Math.random(1)
    }
}
store1.dispatch(getAction())
log(store1.getState())
store2.dispatch(getAction())
log(store2.getState())

function log (s) {
    console.log('answer is' + JSON.stringify(s))
}