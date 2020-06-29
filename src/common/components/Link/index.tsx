import React, { useState } from "react";
import "./index.less";

interface Ia {
  href: string;
  target: string;
  children?: any;
}

export const Link: React.FC<any> = (props) => {
  /*
  css
  inline
  下划线 css
   cursou

   hover


  js
  点击后变色（记录是否点击过）
  跳转

  _blank
   */

  const [haveClick, setHaveClick] = useState(false);
  const [haveHover, setHaveHover] = useState(false);

  /*
  html
   */
  return (
    <div
        data-haveClick={haveClick}
      className={'my-a'}
      onClick={() => {
        setHaveClick(true);

        if (props.target === '_blank') {
          window.open(props.href);
        } else {
          window.location.href = props.href;
        }
      }}
    >
      {props.children}
    </div>
  );
  // return <a href="123" title='点击我' attr='' ></a>;
};
