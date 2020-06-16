import React, { useEffect, useState } from "react";
import "./index.less";

interface IZhenDongQi {
  render?: any
}

/*

这块hoc renderProps 没整明白。
 */

export const ZhenDongQi: React.FC<IZhenDongQi> = (props) => {
  const [timer, setTimer] = useState(0);

  const interval = 1000;

  useEffect(() => {
    window.setInterval(() => {
      setTimer((time) => {
        return time + 1;
      });
    }, interval);
  }, []);

  return (
    <div className="component-style">
      <p>振动器：{timer}</p>
      {/*{props.render && props.render({time: timer})}*/}
    </div>
  );
};
