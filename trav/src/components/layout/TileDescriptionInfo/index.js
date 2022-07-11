import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export const TileDescriptionInfo = ({ tripCountries, duration }) => {
  return (
    <p className="tile-description-trip">
      {`${tripCountries.length} ${
        tripCountries.length > 1 ? "Countries" : "Country"
      }, ${duration} ${duration > 1 ? "Days" : "Day"}`}
    </p>
  );
};

// Proptypes
TileDescriptionInfo.propTypes = {
  tripCountries: PropTypes.array.isRequired,
  duration: PropTypes.number.isRequired,
};
