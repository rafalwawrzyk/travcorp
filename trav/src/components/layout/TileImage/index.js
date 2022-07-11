import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export const TileImage = ({ image }) => (
  <div className="tile-image">
    {image ? <img src={image} alt="trip" /> : <div className="tile-image__placeholder"></div>}
  </div>
);

// Proptypes
TileImage.propTypes = {
  image: PropTypes.string.isRequired,
};
