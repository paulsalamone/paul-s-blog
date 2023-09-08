import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const divStyles = {
  margin: "5px",
  padding: "10px",
  width: "fit-content",
};
const rowStyles = {
  display: "flex",
};
const imageStyles = {
  margin: "5px",
  border: "2px solid black",
};
const Gallery = () => {
  const data = useStaticQuery(graphql`
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
    <>
      <div style={divStyles}>
        {data.allContentfulArtwork.edges.map((edge, index) => {
          return (
            <>
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
            </>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
