import React,{useState} from "react";
import Project from "../componet2/Project";
import  "E:/Reactapps/searchbox/src/componet2/index.css"
import axios from "axios"
// import unsplash from "../api/unsplashpractice";

// import SearchBar from "./SearchBox";

// import ImageList from "./ImageList";
const list={
  name:"Cars",
  
};

const App=()=> {
  const [image,setImage]=useState("");
  const [result,setResult]=useState([])
  const key="ShKRMUG33Pk_3KbYhaiB16ubm206Q9mkhtsnxaev7qY"
  function handleOnChange(event){

    setImage(event.target.value)
  }
  function handleOnSubmit(event){
    console.log(image)
    const url="https://api.unsplash.com/search/photos?page=1&query="+image+"&client_id="+key+""
     axios.get(url)
     .then((response)=>{

       console.log(response)
       setResult(response.data.results)
     })
  }

  
    return (<>
    
     <input onChange={handleOnChange}  name="Photo" placeholder="Search" type="text"></input>
        <button onClick={handleOnSubmit}>Search</button>
        <div className="container-fluid border border-2">
        <div className="row">
          {console.log(result)}
        {result.map((image)=>{
          return (<div className="col-md-4 p-2"><img src={image.urls.regular} alt={image.alt_description} style={{width:"100%",objectFit:"cover",height:"300px"}}/></div>)
        })}
        </div>
        </div>
      <Project profile={list}  />
      </>
    );
  }


export default App;

// class App extends React.Component {
//   state = { images: [] };
  
//   onSearchSubmit = async (term) => {
//     const response = await unsplash.get("/search/photos", {
//       params: {
//         query: term,
//       },
//     });

//     this.setState({ images: response.data.results });
//   };

//   render() {
//     return (<>
//       <Project profile={list} item={item} />
     
//       <div className="container" style={{ marginTop: "10px" }}>
//         <SearchBar onSubmit={this.onSearchSubmit} />

//         <ImageList images={this.state.images} />
//       </div>
//       </>
//     );
//   }
// }