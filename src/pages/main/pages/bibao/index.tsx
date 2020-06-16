import React, { useEffect, useMemo } from "react";
import "./index.less";
import { ZhenDongQi } from "../../../components/zhendongqi";
import { useZhenDang } from "../../../useHook/useZhenDang";

export const BiBaoOut: React.FC<any> = (props) => {
  const timer = useZhenDang();
  /*
  我在api层面，永远也无法理解react，永远无法精进。
  我需要知道react比对的原理究竟是什么。

  我现在来看，他似乎是在比对。
  那么obj肯定就不一样。（为什么不一样呢？如何一样呢？）
   */
  const current = {
    name: "1",
    age: "2",
  };
  const number = 123;
  return <BiBao1 config={number} />;
};

interface IBiBao1 {
  config?: any;
}

export const BiBao1: React.FC<IBiBao1> = (props) => {
  // 如何让我们记住呢？
  useEffect(() => {
    console.log("change");
    console.log(props.config);
  }, [props.config]);
  // 因为每次都是全新的。
  // const其实并不安全。const如果不是number这种类型，他就是疯狗
  const logFunc = useMemo(() => {
    return bibao(props.config);
  }, [props.config]);

  useEffect(() => {
    logFunc();
  }, [logFunc]);
  return <div className="component-style">Component1</div>;
};

/*
这样的闭包毫无意义。
还不如直接利用react组件形成闭包。
我们的目的是持久化config。
但是其实作为props传进来的config。已经足够了。

我的意思是，你哪怕没有闭包。直接使用，也足够了
 */

const bibao = (config: any) => {
  return () => {
    console.log(config);
  };
};
