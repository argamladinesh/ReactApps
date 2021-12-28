import React, { useState,useEffect } from "react";
const Project2 = (props) => {
    const [location,setLocation]=useState({loaded:false,coordinates:{lat:"",long:""}})
  const [image, setImage] = useState(true);
  const imageHandaler = () => {
    setImage(!image);
  };
  const onSuccess=location=>{
  setLocation({
      loaded:true,
      coordinates:{
          lat:location.coords.latitude,
            long:location.coords.longitude
      }
  })
}
const onError=error=>{
    setLocation({
        loaded:error,
        error,
    })
}
  useEffect(()=>
  {
      if(!("geolocation"in navigator))
      {
          onError({
              code:0,
              message:"Geolocation not supported "
          })
         
          }
          console.log("Available")
          navigator.geolocation.getCurrentPosition(onSuccess,onError)
      
      

  },[]);

  return (
    <div>
      <table className="table">
        <tr>
          <td className="col-md-3"> </td>
          <td className="col-md-6">
      <div className="card mb-5 b-2 border-dark " >
        {image && (
          <img
            src="https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/08/2019-Porsche-911-GT3-RS-Front-e1598543838998.jpg"
            className="card-img-top"
            alt="car"
            style={{ width: "100%", height: "300px" }}
            onClick={imageHandaler}
          />
        )}
        {!image && (
          <img
            src="https://www.autocar.co.uk/sites/autocar.co.uk/files/slideshow_image/1a-entry-muscle-cars-june-2019.jpg"
            className="card-img-top"
            alt="car"
            style={{ width: "100%", height: "300px" }}
            onClick={imageHandaler}
          />
        )}

        <div
          className="card-header bg-dark text-center"
          style={{ maxHeight: "18rem" }}
        >
          <h2>
            <b className="text-white">What is cars?</b>
          </h2>
        </div>
        <div className="card-body bg-white">
          <h1 className="card-title">Cars</h1>
          <p className="card=text">
            CarWale is one of the India's leading source of new car pricing and
            other cars related information. CarWale exists to simplify car
            buying in India and helps you buy the right car at the right price.

{            location.loaded?JSON.stringify(location):"location is not available"
}         </p>
        </div>
      </div>
      </td>
      <td className="col-md-3"></td>
      </tr>
        </table> 
    </div>
  );
};

export default Project2;
