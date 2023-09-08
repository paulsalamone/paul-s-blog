import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Gallery from "../components/Gallery";
import Layout from "../components/Layout";

const Artwork = () => {
  return (
    <>
      <Layout>
        <h3>Artwork</h3>
        <Gallery />
      </Layout>
    </>
  );
};

export const Head = () => <title>Paul's Website: ARTWORK</title>;

export default Artwork;
