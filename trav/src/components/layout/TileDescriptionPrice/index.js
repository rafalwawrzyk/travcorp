import React from "react";
import PropTypes from "prop-types";
import { currFormatter } from "helpers";
import "./styles.scss";

export const TileDescriptionPrice = ({ price }) => {
  return (
    <p className="tile-description-price">
      <span className="tile-description-price__from">
        From {currFormatter(price.from)}
      </span>
      <span className="tile-description-price__discount">
        Price {currFormatter(price.discount)}
      </span>
    </p>
  );
};

// Proptypes
TileDescriptionPrice.propTypes = {
  price: PropTypes.shape({
    from: PropTypes.number,
    discount: PropTypes.number,
  }).isRequired,
};
