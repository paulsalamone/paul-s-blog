import * as React from "react";
import Gallery from "../components/Gallery";
import Layout from "../components/Layout";

const Artwork = () => {
  return (
    <React.Fragment>
      <Layout>
        <h3>Artwork</h3>
        <Gallery />
      </Layout>
    </React.Fragment>
  );
};

export const Head: React.FC = () => <title>Paul's Website: ARTWORK</title>;

export default Artwork;
