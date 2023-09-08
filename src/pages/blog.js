import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

const liStyles = {
  lineHeight: "15px",
  fontSize: "16px",
  marginBottom: "20px",
};
const dateStyles = {
  color: "grey",
  fontSize: "10px",
  //   marginLeft: "20px",
};

const Blog = ({ data }) => {
  const getDate = (date) => {
    if (date) {
      return date.slice(0, 10);
    }
    return "no date provided";
  };

  return (
    <>
      <Layout>
        <h3>Blog</h3>
        <p>A list of articles:</p>
        <ul>
          {data.allContentfulBlogPost.edges.map((edge) => (
            <li key={edge.node.id} style={liStyles}>
              <Link to={`/blog/${edge.node.slug}`}>
                <p>{edge.node.title}</p>{" "}
              </Link>

              <span style={dateStyles}>
                {edge.node.slug} • {getDate(edge.node.date)}
              </span>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          date
          id
          slug
        }
      }
    }
  }
`;

export const Head = () => <title>Paul's Website : BLOG</title>;

export default Blog;
