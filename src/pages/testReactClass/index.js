import React from "react";
import "./index.less";
//
// interface ITestReactClass {
//
// }

export class TestReactClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Inner>haha</Inner>
        <Inner2>haha</Inner2>
      </div>
    );
  }
}

var l = (s) => {
  console.log(s);
  console.log(JSON.stringify(s));
};
const expect = (a, b, c) => {
  if (a === b) {
    console.log(c);
  } else {
    console.error(c);
  }
};
expect(TestReactClass instanceof React.Component, false, "1");
expect(
  Object.getPrototypeOf(TestReactClass.prototype) === React.Component.prototype,
  true,
  "2"
);
expect(Object.getPrototypeOf(TestReactClass) === React.Component, true, "3");
l(TestReactClass.prototype.componentDidMount);
l(React.Component.componentDidMount);

/*
1）Inner.__proto__ === React.Component
2)Inner.prototype === React.Component.prototype
3)
 */

// function myExtends(Child, Father) {
//   // 1
//   var prototype = Object.create(Father.prototype)
//   prototype.constructor = Child
//   Child.prototype = prototype
//   Child.__proto = Father
// }

/*
function class() {
    // 1 extends
    // 2
    return function Child() {
      // 1 调用父类方法
      Father.apply(this, arguments)
    }
}

const c1 = new Child()

// 1prototype使用
// 2Child静态方法使用
// this初始化
// 3父类方法朝圣

 */

function Inner2(props) {
  function haha() {
    props.hehe && props.hehe()
  }
  return <div onClick={haha}>{props && props.children}</div>;
}

class Inner extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log(this.props);
    // this.state = {
    //   count: 0
    // }
  }

  onClickHandler() {
    console.log("get it");
    this.setState({ count: Date.now() }, () => {
      console.log("get it");
    });
    // this.setState(({count: ++this.state.count}))
  }

  render() {
    console.log(this.state);
    return (
      <div onClick={this.onClickHandler.bind(this)}>
        {this.props && this.props.children} {this.state && this.state.count}
      </div>
    );
  }
}


class A {}
class B extends A {}
debugger
l(B.prototype.__proto__ === A.prototype)
l(B.__proto__ === A)
console.log(B.prototype instanceof A); // true


const a = {}
const b = Object.create(a)

function object(o) {
  function F() {
  }
  F.prototype = o
  return new F()
}

l(b.__proto__ ===  a)
l(b.prototype instanceof a)

/*


因此extends是向魔鬼臣服。将自己的prototype作为另外一个类的实例。这样就有了原型链的基础——每个原型，都是另外一个原型的实例。或者说
anyPrototype.__proto__ === other prototype === other Constructor instance.

这样的好处就是。
我的子民，
b1 -proto> === B.prototype -proto> A.prototype


extend本质是
Object.create本质是
获取了一个被改写了__proto__的对象
Object.create的本质仅仅是夺魂咒。
它能改变你的__proto__
也就是说，我具有了窃取他人原型的能力。但是这里面并没有实例的事。
那么有个有趣的问题，既然直接复制就可以实现。为什么我们需要使用Object.create()
以寄生继承为例。的确。。我也觉得。Child.prototype.__proto__ = Father.prototype就可以了。(我觉得原因是我们避免使用__proto__。)
但你可以认为，Object.create实质就是如此
我重新修正Object.create。
它实际上是，灵魂克隆装置。他返回了一个__peoto__指向xxx的，非常纯粹的对象。然后你当然可以在这个基础上，在进行其他的修改

instanceof的本质是。
某个obj的原型链上面（也就是__proto__ chain上面），有Constructor的prototype。这也真是拗口


prototype的本质。是当使用new操作符的时候，所有子类的__proto__指向
 */