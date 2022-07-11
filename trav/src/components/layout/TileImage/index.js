import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export const TileImage = ({ image }) => (
  <div className="tile-image">
    <img src={image} alt="trip" />
  </div>
);

// Proptypes
TileImage.propTypes = {
  image: PropTypes.string.isRequired,
};
