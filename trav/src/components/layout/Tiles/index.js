import React from "react";
import * as c from 'components';
import "./styles.scss";

export const Tiles = () => {
  return (
    <div className="tiles">
      <h2 className="tiles__title">Recently viewed trips</h2>
      <div>
        <c.Tile />
      </div>
    </div>
  );
};
