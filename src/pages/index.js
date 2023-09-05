import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

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

  console.log(data);

  return (
    <main style={mainStyles}>
      <h1>Paul's Blog</h1>
      <h2>Made with Gatsby + Contentful</h2>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Paul's Blog</title>;
