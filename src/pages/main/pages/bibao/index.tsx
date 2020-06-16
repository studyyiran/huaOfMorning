import React, { useEffect } from "react";
import "./index.less";
import {ZhenDongQi} from "../../../components/zhendongqi";

interface IComponent {}

export const BiBaoOut: React.FC<IComponent> = (props) => {
  return <ZhenDongQi>
    <BiBao1 />
  </ZhenDongQi>
}

export const BiBao1: React.FC<IComponent> = (props) => {
  // 如何让我们记住呢？
  const config = {
    name: "1",
    age: "2",
  };

  useEffect(() => {
    console.log(config);
  }, [config]);

  return <div className="component-style">Component</div>;
};
