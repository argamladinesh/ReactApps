import React from "react";

const renderImages = ({images}) => {
    if (images.length > 0) {
        return (
            <div className="row">
                {
                    images.map(item =>  
                        <div className="col-md-4 p-2 " >
                            <img src={item.urls.regular} alt={item.alt_description} style={{ width:"100%", objectFit:"cover", height:"300px"}} />
                        </div>
                    )
                }
            </div>
        );
    } 
    else {
        return <label className="text-secondary"><h3>Please make a valid search</h3></label> ;
    }
};

const ImageList = ({images}) => {
    return <div className="container-fluid border border-dark  border-2 rounded" style={{backgroundColor:"#6b6b6b"}} >{renderImages({images})}</div>;
};

export default ImageList;

// import React from "react";

// const renderImage = (props) => {
//   if (props.images.length > 0) {
//     return (
//       <img
//         className="ui medium image centered"
//         alt={props.images[0]["alt_description"]}
      
//         src={props.images[0].urls.regular}
//       ></img>
//     );
//   } else {
//     return "Please make a valid search";
//   }
// };

// const ImageList = (props) => {
//   return <div className="ui segment">{renderImage(props)}</div>;
// };

// export default ImageList;
// // images.forEach(element => {
    
// // });