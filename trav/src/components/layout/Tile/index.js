import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ReactStars from "react-rating-stars-component";
import { roundScore, currFormatter } from "helpers";
import "./styles.scss";

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const Tile = ({ trip }) => {
  const { title, duration, tripCountries, score, price, image } = trip || {};

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      variants={variants}
      className="tile"
    >
      <div className="tile__image">
        <img src={image} alt="trip" />
      </div>
      <div className="tile__description">
        <p className="tile__description-trip">
          {`${tripCountries.length} ${
            tripCountries.length > 1 ? "Countries" : "Country"
          }, ${duration} ${duration > 1 ? "Days" : "Day"}`}
        </p>
        <h3 className="tile__description-title">{title}</h3>
        <div className="tile__score-container">
          <ReactStars
            count={5}
            value={roundScore(score)}
            edit={false}
            isHalf={true}
            size={12}
            activeColor="#ffd700"
          />
          <span className="tile__score-rating">{score}</span>
        </div>
        <p className="tile__description-price">
          <span className="tile__price-from">
            From {currFormatter(price.from)}
          </span>
          <span className="tile__price-discount">
            Price {currFormatter(price.discount)}
          </span>
        </p>
      </div>
    </motion.div>
  );
};

// Proptypes
Tile.propTypes = {
  trip: PropTypes.shape({
    title: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    tripCountries: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    price: PropTypes.shape({
      from: PropTypes.number,
      discount: PropTypes.number,
    }).isRequired,
    image: PropTypes.string.isRequired,
  }),
};
