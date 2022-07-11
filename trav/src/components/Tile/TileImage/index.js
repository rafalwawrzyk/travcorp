import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export const TileImage = ({ image, alt }) => (
  <div className="tile-image">
    {image ? (
      <img src={image} alt={alt === "" && "image"} />
    ) : (
      <div className="tile-image__placeholder"></div>
    )}
  </div>
);

// Proptypes
TileImage.propTypes = {
  image: PropTypes.string.isRequired
};
