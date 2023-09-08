import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

interface BlogProps {
  data: {
    allContentfulBlogPost: {
      edges: Array<{
        node: {
          title: string;
          date: string;
          id: string;
          slug: string;
        };
      }>;
    };
  };
}


const liStyles: React.CSSProperties = {
  lineHeight: "15px",
  fontSize: "16px",
  marginBottom: "20px",
};
const dateStyles: React.CSSProperties = {
  color: "grey",
  fontSize: "10px",
};

const Blog: React.FC<BlogProps> = ({ data }) => {
  const getDate = (date) => {
    if (date) {
      return date.slice(0, 10);
    }
    return "no date provided";
  };

  return (
    <React.Fragment>
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
    </React.Fragment>
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
