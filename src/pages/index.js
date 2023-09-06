import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import TopNav from "../components/TopNav";
import Gallery from "../components/Gallery";
// styles?
const mainStyles = {
  border: "5px solid black",
  padding: "2rem",
  height: "88vh",
  fontFamily: "monospace",
};

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulBlogPost {
        edges {
          node {
            id
            title
            content {
              references {
                id
              }
            }
          }
        }
      }
    }
  `);

  // console.log(data);

  return (
    <main style={mainStyles}>
      <h1>Paul's Blog</h1>
      <h2>Made with Gatsby + Contentful</h2>
      <TopNav />
      <Gallery />
    </main>
  );
};

export const Head = () => <title>Paul's Blog</title>;

export default IndexPage;
