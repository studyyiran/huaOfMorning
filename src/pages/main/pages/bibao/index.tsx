import React, { useEffect } from "react";
import "./index.less";
import { ZhenDongQi } from "../../../components/zhendongqi";

export const BiBaoOut: React.FC<any> = (props) => {
  return (
    <ZhenDongQi
      render={(config: any) => {
        return <BiBao1 config={config} />;
      }}
    />
  );
};

interface IBiBao1 {
  config?: any;
}

export const BiBao1: React.FC<IBiBao1> = (props) => {
  // 如何让我们记住呢？
  const config = {
    name: "1",
    age: "2",
  };

  // useEffect(() => {
  //   console.log('bibao1 useEffect')
  //   console.log(props.config);
  // }, [props.config]);

  // useEffect(() => {
  //   console.log(config);
  // }, [config]);

  return <div className="component-style">Component1</div>;
};

function bibao(config) {
  return () => {

  }
}