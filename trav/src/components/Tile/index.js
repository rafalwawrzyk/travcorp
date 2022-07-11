import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import * as c from "components";
import "./styles.scss";

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const Tile = ({ trip }) => {

  const { image, imageAlt = "image" } = trip || {};

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      variants={variants}
      className="tile"
    >
      <c.TileImage image={image} alt={imageAlt} />
      <c.TileDescription trip={trip} />
      
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
    imageAlt: PropTypes.string.isRequired
  }),
};
