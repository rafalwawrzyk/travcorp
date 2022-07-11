import React from "react";
import PropTypes from "prop-types";

export const TileDescriptionTitle = ({ title }) => (
  <h2 className="tile-description-title">{title}</h2>
);

// Proptypes
TileDescriptionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
