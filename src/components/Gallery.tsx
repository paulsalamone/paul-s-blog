import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const divStyles: React.CSSProperties = {
  margin: "5px",
  padding: "10px",
  width: "fit-content",
};
const rowStyles: React.CSSProperties = {
  display: "flex",
};
const imageStyles: React.CSSProperties = {
  margin: "5px",
  border: "2px solid black",
};

interface Artwork {
  allContentfulArtwork: {
    edges: Array<{
      node: {
        title: string;
        images: Array<{
          id: string;
          url: string;
        }>;
      };
    }>;
  };
}
const Gallery = () => {
  const data: Artwork = useStaticQuery(graphql`
    query {
      allContentfulArtwork {
        edges {
          node {
            title
            images {
              id
              url
            }
          }
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <div style={divStyles}>
        {data.allContentfulArtwork.edges.map((edge, index) => {
          return (
            <React.Fragment>
              <p>{edge.node.title}</p>
              <div style={rowStyles}>
                {edge.node.images &&
                  edge.node.images.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image.url}
                        alt={`image ${index}`}
                        height="80px"
                        width="80px"
                        style={imageStyles}
                      />
                    </div>
                  ))}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Gallery;
