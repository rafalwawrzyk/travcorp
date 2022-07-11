import React from "react";
import PropTypes from "prop-types";
import * as c from "components";
import "./styles.scss";

export const TileDescription = ({ trip }) => {
  const { title, duration, tripCountries, score, price } = trip || {};

  return (
    <div className="tile-description">
      <c.TileDescriptionInfo
        tripCountries={tripCountries}
        duration={duration}
      />
      <c.TileDescriptionTitle title={title} />
      <c.TileDescriptionScore score={score} />
      <c.TileDescriptionPrice price={price} />
    </div>
  );
};

// Proptypes
TileDescription.propTypes = {
  trip: PropTypes.shape({
    title: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    tripCountries: PropTypes.array.isRequired,
    score: PropTypes.number.isRequired,
    price: PropTypes.shape({
      from: PropTypes.number,
      discount: PropTypes.number,
    }).isRequired,
  }),
};
