import React from "react";
import PropTypes from "prop-types";
import { pluralFormat } from "helpers";
import "./styles.scss";

export const TileDescriptionInfo = ({ tripCountries, duration }) => {

  const tripInfo = `${pluralFormat(tripCountries.length, "Countries", "Country")}, ${pluralFormat(duration, "Days", "Day")}`;

  return (
    <p className="tile-description-trip">
      {tripInfo}
    </p>
  );
};

// Proptypes
TileDescriptionInfo.propTypes = {
  tripCountries: PropTypes.array.isRequired,
  duration: PropTypes.number.isRequired,
};
