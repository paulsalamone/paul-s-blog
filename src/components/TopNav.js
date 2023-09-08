import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

// STYLES

const navStyles = {
  display: "flex",
  width: "300px",
  border: "1px solid grey",
  padding: ".3rem",
  justifyContent: "space-around",
};

const TopNav = () => {
  return (
    <>
      <nav style={navStyles}>
        <Link to="/">Home</Link>
        <Link to="/artwork">Artwork</Link>
        <Link to="/blog">Blog </Link>
      </nav>
    </>
  );
};

export default TopNav;
