import * as React from "react";
import TopNav from "../components/TopNav";

const topStyles = {
  border: "5px solid black",
  padding: "2rem",
  height: "88vh",
  fontFamily: "monospace",
  display: "flex",
  flexDirection: "column",
  alignItems: "space-between",
};

const footerStyles = {
  position: "absolute",
  bottom: "40px",
};

const Layout = ({ children }) => {
  return (
    <div style={topStyles}>
      <>
        {" "}
        <header>
          <h1>Paul's Website</h1>
          <h2>Made with Gatsby + Contentful</h2>
          <TopNav />
        </header>
        <main>{children}</main>
      </>

      <footer style={footerStyles}>©2023 Paul Salamone</footer>
    </div>
  );
};

export default Layout;
