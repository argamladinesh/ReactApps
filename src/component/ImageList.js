import React from "react";

const renderImage = (props) => {
  if (props.images.length > 0) {
    return (
      <img
        className="ui medium image centered"
        alt={props.images[0]["alt_description"]}
      
        src={props.images[0].urls.regular}
      ></img>
    );
  } else {
    return "Please make a valid search";
  }
};

const ImageList = (props) => {
  return <div className="ui segment">{renderImage(props)}</div>;
};

export default ImageList;
// images.forEach(element => {
    
// });