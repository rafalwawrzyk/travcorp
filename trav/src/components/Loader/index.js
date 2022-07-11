import React from "react";
import "./styles.scss";

export const Loader = () => {

  const barsNum = 6;

  const showBars = () => {
    return [...Array(barsNum)].map((e,i) => <div className={`loader__bar${i}`}></div>)
  }

  return (
    <div className="loader">
        {showBars()}
    </div>
  )
}
