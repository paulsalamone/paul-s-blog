import * as React from "react";
import Layout from "../components/Layout";

const welcomeStyles: React.CSSProperties = {
  fontSize: "89px",
};

const IndexPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <h1 style={welcomeStyles}>Welcome to Paul's Website</h1>
      </Layout>
    </React.Fragment>
  );
};

export const Head: React.FC = () => <title>Paul's Blog</title>;

export default IndexPage;
