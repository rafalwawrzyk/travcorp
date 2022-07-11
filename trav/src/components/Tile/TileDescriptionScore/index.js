import React from "react";
import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";
import { roundScore } from "helpers";
import "./styles.scss";

export const TileDescriptionScore = ({ score }) => {
  return (
    <div className="tile-description-score">
      <ReactStars
        count={5}
        value={roundScore(score)}
        edit={false}
        isHalf={true}
        size={12}
        activeColor="#ffd700"
      />
      <span className="tile-description-score__rating">{score}</span>
    </div>
  );
};

// Proptypes
TileDescriptionScore.propTypes = {
  score: PropTypes.number.isRequired,
};
