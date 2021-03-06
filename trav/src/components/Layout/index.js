import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export const Layout = ({ children }) => {
  return <main className="layout">{children}</main>;
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired
}
