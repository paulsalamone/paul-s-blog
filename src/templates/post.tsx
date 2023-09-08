import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES, BLOCKS, MARKS, ContentNode, Mark } from "@contentful/rich-text-types";
import { createContentDigest } from "gatsby-core-utils";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

// INTERFACES / TYPE DECLARATIONS
interface IContentfulAsset {
  contentful_id: string;
  gatsbyImageData: IGatsbyImageData;
  description: string;
  title: string;
}

interface IBlogPostContent {
  raw: string;
  references: IContentfulAsset[];
}

interface IContentfulBlogPost {
  id: string;
  slug: string;
  title: string;
  internal: any;
  content: IBlogPostContent;
}

interface PostProps {
  data: {
    contentfulBlogPost: IContentfulBlogPost;
  }
}

// STYLES
const imageStyle: React.CSSProperties = {
  width: "300px",
};

let postTitle: string;

const Post: React.FC<PostProps> = ({ data }) => {
  const { id, slug, title, internal, content } = data.contentfulBlogPost;
  console.log("content.references", content.references);
const [postTitle, setPostTitle] = React.useState("");
// setPostTitle(title);

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node: ContentNode, children: React.ReactNode) => {
        const { uri } = node.data;
        console.log("renderNode node", node);
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        );
      },
    [BLOCKS.HEADING_2]: (_: ContentNode, children: React.ReactNode) => {
        return <h2>{children}</h2>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (_: ContentNode) => {
        const { gatsbyImageData, description } = content.references[0];
        return (
         <GatsbyImage
            image={gatsbyImageData}
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
        <Helmet>
      <title>Paul's Website: {data.contentfulBlogPost.title}</title>
    </Helmet>
    <h2>{title}</h2>
    <div>
     {renderRichText(jsonContent, {
  ...options,
  references: content.references
} as any)}
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


export default Post;
