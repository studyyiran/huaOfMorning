import React, { useContext, useEffect } from "react";
import "./index.less";
import {TestLess} from "../components/testLess";
import {Link} from 'react-router-dom'
import {BiBaoOut} from "./pages/bibao";
import {Sequence} from "../../common/test";

interface ITestName {

}

export const MainPage: React.FC<ITestName> = props => {
  return <div className="main-page" onClick={() => {
    // @ts-ignore
    const s : any = new Sequence();
    console.log(s.next())
  }
  }>
    <Link to="/sub">to sub</Link>
    <BiBaoOut/>
  </div>;
}
