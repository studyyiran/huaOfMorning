/*
function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hello, I'm " + identify.call( this );
    console.log( greeting );
}

var me = {
    name: "Kyle"
};

var you = {
    name: "Reader"
};

// this和call 里应外合。奸细
identify.call( me ); // KYLE
identify.call( you ); // READER

// 类似的
speak.call( me ); // Hello, I'm KYLE
speak.call( you ); // Hello, I'm READER

// 记住一点，this和传入一个参数没有任何区别。（因此你也许可以大胆的记忆。this的底层机制，就和传参类似）


// 1)他们都是在运行的时候指定的。不运行，你何来的this的搜索。



function identify2(context) {
    return context.name.toUpperCase();
}

function speak2(context) {
    var greeting = "Hello, I'm " + identify( context );
    console.log( greeting );
}

identify2( you ); // READER
speak2( me ); // Hello, I'm KYLE



var count = 0
function foo(num) {
    console.log( "foo: " + num );

    // 追踪 `foo` 被调用了多少次
    count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
    if (i > 5) {
        foo( i );
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// `foo` 被调用了多少次？
console.log( foo.count ); // 0 -- 这他妈怎么回事……？
console.log(window.count)



window.setInterval(function hehe() {
    console.log(hehe)
}, 1000)



// 'use strict'
function foo() {
    this.age = Date.now()
    console.log(this.bar === window.bar)
    console.log(this.bar === bar)
    bar.call(this);
}

function bar() {
    console.log(this.name)
    // 关键是，why？
    // 为什么不支持，脱离词法作用的方法。为什么只能通过参数过去呢？why？
    console.log( this.age );
}


const pianzi = {
    name: 'dapianzi',
    bierenderfoo: foo,
    MyPromise: Promise
}

pianzi.bierenderfoo()

// 那我们还要bind做啥？
// 因为我决定不了调用者。
// this.onClickHandler.bind(this) // 但是bind只要不遇到猫头鹰，就行了。

const p1 = new pianzi.MyPromise((r) => {
    r()
})
// 这块不是说好的会让我偷窥到调用者吗？
// 这说明。。。没有人持有。仅仅有调用
// 那我应该如何才能偷窃到promise里面的this实例呢？
// 箭头函数那个白痴指望不上。它仅仅把this沉默了。变成了最普通的变量。走词法作用域。
// 这说明了，只有外面和里面里应外合。才行。外面有意，里面不接应，没用。里面有this，外面不穿。也没用。
// 而箭头怎么说呢，就完全废弃了，基于this的执行作用。完全基于词法。这样有一种神奇的掌控感（箭头和that一样。都是试图用词法净化this的多变）
p1.then(function () {
    // 虽然我使用构造函数。但是他似乎已经遗忘了我。
    // 我认为。。。我的bind应该有这个记忆。这块有点乱
    console.log(p1.name)
    console.log('get it')
})

const a = () => {
    console.log('沉默领域')
    console.log(typeof arguments)
    console.log(this)
}

let that = {}

const b = function (){
    console.log(that)
}

function test() {
    console.log('kankan this')
    console.log(this)
}

console.log('start ')
console.log(this)
a()
test()

// 通过这种仪式，我们居然能纯粹通过this的方式，偷过来this的指向。
// 这块我可以稍后

// window下的this。永远指向window。这很有趣哦.(这是global的事情。是无法更改的)
// strict模式的作用，仅仅是关闭掉直接调用函数的默认传值。并不会影响window的this。use strict只会改变strict模式



function console() {
    // 调用栈是: `baz`
    // 我们的调用点是 global scope（全局作用域）

    console.log( "baz" );
    bar(); // <-- `bar` 的调用点
}

function bar() {
    // 调用栈是: `baz` -> `bar`
    // 我们的调用点位于 `baz`

    console.log( "bar" );
    foo(); // <-- `foo` 的 call-site
}

function foo() {
    // 调用栈是: `baz` -> `bar` -> `foo`
    // 我们的调用点位于 `bar`

    console.log( "foo" );
}

console(); // <-- `baz` 的调用点

 */
function foo() {
    console.log( this.a );
}

var a = 2;

(function(){
    "use strict";

    foo(); // 2
})();

/*
js的设计，只留了几种桥梁
1）词法。那就是静态的。
2）动态的。那就是this。
3）传参
4）闭包（闭包我的理解就是，凝固了的词法。因为闭包本质上就是作用链域未被释放。而未被释放的原因是，函数还在。函数被外面持有了）

函数本身是静静的白莲花。
而一旦函数内部有了this。那就成了奸夫淫妇。
任何人都可以通过bind，call，apply对他们指手画脚。

哪怕不通过上面这三个。也可以通过，直接把函数，请到自己府上。持有它。从而为所欲为。

但这种机制是合理的。
我们需要一种灵活的，又不依赖于参数传递的方案。

并且我们也需要基于词法的，不变的作用链域
 */