import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const divStyles = {
  margin: "5px",
  //   border: "1px dotted grey",
  padding: "10px",
  width: "fit-content",
};
const imageStyles = {
  margin: "5px",
  border: "2px solid black",
};
const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulArtwork {
        images {
          url
        }
      }
    }
  `);
  console.log(data.contentfulArtwork.images);

  //   const [images, setImage] = useState()
  return (
    <>
      <div style={divStyles}>
        <h4>Recent Gallery selections:</h4>
        {/* {data.contentfulArtwork.images[0].url} */}
        {data.contentfulArtwork.images.map((image, index) => (
          <img
            src={image.url}
            alt={`image ${index}`}
            height="80px"
            width="80px"
            style={imageStyles}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
