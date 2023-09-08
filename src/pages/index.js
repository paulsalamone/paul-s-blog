import * as React from "react";
import Layout from "../components/Layout";

const welcomeStyles = {
  fontSize: "89px",
};

const IndexPage = () => {
  return (
    <>
      <Layout>
        <h1 style={welcomeStyles}>Welcome to Paul's Website</h1>
      </Layout>
    </>
  );
};

export const Head = () => <title>Paul's Blog</title>;

export default IndexPage;
