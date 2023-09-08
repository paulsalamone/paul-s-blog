import * as React from "react";
import TopNav from "./TopNav";

interface LayoutProps {
  children: React.ReactNode;
}

const topStyles: React.CSSProperties = {
  border: "5px solid black",
  padding: "2rem",
  height: "88vh",
  fontFamily: "monospace",
  display: "flex",
  flexDirection: "column",
  alignItems: "space-between",
};

const footerStyles: React.CSSProperties = {
  position: "absolute",
  bottom: "40px",
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={topStyles}>
      <React.Fragment>
        <header>
          <h1>Paul's Website</h1>
          <h2>Made with Gatsby + Contentful</h2>
          <TopNav />
        </header>
        <main>{children}</main>
      </React.Fragment>

      <footer style={footerStyles}>©2023 Paul Salamone</footer>
    </div>
  );
};

export default Layout;
