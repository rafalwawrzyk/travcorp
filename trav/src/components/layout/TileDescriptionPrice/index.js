import React from "react";
import PropTypes from "prop-types";
import { currFormatter } from "helpers";
import "./styles.scss";

export const TileDescriptionPrice = ({ price }) => {
  return (
    <p className="tile-description-price">
      {price && price.from && (
        <span className="tile-description-price__from">
          From {currFormatter(price.from)}
        </span>
      )}

      {price && price.discount && (
        <span className="tile-description-price__discount">
          Price {currFormatter(price.discount)}
        </span>
      )}
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
