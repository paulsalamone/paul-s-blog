import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import { createContentDigest } from "gatsby-core-utils";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const imageStyle = {
  width: "300px",
};
const Post = ({ data }) => {
  const { id, slug, title, internal, content } = data.contentfulBlogPost;
  console.log("content.references", content.references);

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data;
        console.log("renderNode node", node);
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        );
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{children}</h2>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImageData, description } = content.references[0];
        return (
          <GatsbyImage
            image={getImage(gatsbyImageData)}
            alt={description}
            style={imageStyle}
          />
        );
      },
    },
  };

  const jsonContent = {
    raw: content.raw,
    nodeType: "document",
  };

  return (
    <Layout>
      <h2>{title}</h2>
      <div>
        {renderRichText(jsonContent, options, {
          references: content.references,
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogPost($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      slug
      title
      internal {
        content
        description
        ignoreType
        mediaType
        contentFilePath
      }
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            gatsbyImageData(width: 1000)
            description
            title
          }
        }
      }
    }
  }
`;

export const Head = () => <title>Paul's Website: POST</title>;

export default Post;
