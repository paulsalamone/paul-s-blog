import * as React from "react";
import { Link } from "gatsby";


const navStyles: React.CSSProperties = {
  display: "flex",
  width: "300px",
  border: "1px solid grey",
  padding: ".3rem",
  justifyContent: "space-around",
};

const TopNav = () => {
  return (
    <React.Fragment>
      <nav style={navStyles}>
        <Link to="/">Home</Link>
        <Link to="/artwork">Artwork</Link>
        <Link to="/blog">Blog </Link>
      </nav>
    </React.Fragment>
  );
};

export default TopNav;
