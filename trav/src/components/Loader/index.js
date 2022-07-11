import React from "react";
import { v4 as uuidv4 } from 'uuid';
import "./styles.scss";

export const Loader = () => {

  const barsNum = 6;

  const showBars = () => {
    return [...Array(barsNum)].map((e,i) => <div className={`loader__bar${i}`} key={uuidv4()}></div>)
  }

  return (
    <div className="loader">
        {showBars()}
    </div>
  )
}
