const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  data.allContentfulBlogPost.edges.forEach((edge) => {
    actions.createPage({
      path: "/blog/" + edge.node.slug,
      component: path.resolve("./src/templates/post.tsx"),
      context: { slug: edge.node.slug },
    });
  });
};
