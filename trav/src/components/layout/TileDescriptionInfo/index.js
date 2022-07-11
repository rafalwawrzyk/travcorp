import React from "react";
import PropTypes from "prop-types";
import { pluralFormat } from "helpers";
import "./styles.scss";

export const TileDescriptionInfo = ({ tripCountries, duration }) => {
  const tripInfoCountries = tripCountries && pluralFormat(tripCountries.length, "Countries", "Country");
  const tripInfoDuration = duration && pluralFormat(duration, "Days", "Day");

  const showTripInfo = () => {
    if (!tripInfoCountries && !tripInfoDuration) {
      return;
    } else if(!tripInfoDuration) {
      return `${tripInfoCountries}`
    } else if(!tripInfoCountries) {
      return `${tripInfoDuration}`
    }

    return `${tripInfoCountries}, ${tripInfoDuration}`;
  };

  return <p className="tile-description-trip">{showTripInfo()}</p>;
};

// Proptypes
TileDescriptionInfo.propTypes = {
  tripCountries: PropTypes.array.isRequired,
  duration: PropTypes.number.isRequired,
};
