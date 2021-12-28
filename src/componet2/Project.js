import React from "react";
import Project2 from "../componet2/Project2";
const Project = (props) => {

  
  return (
    <div>
    <div  >
      <div className=" container-fluid m-0 b-0 p-0 " >
        <nav className="navbar navbar-light  ">
          <div className="container-fluid">
            <button
              className="btn btn-dark"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasLeft"
              aria-controls="offcanvasExample"
            >
              <i className="bi bi-list"></i>
            </button>
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasLeft"
              arial-labelledby="offcanvasExampleLabel"
            >
              <div className="offcanvas-header">
                <h5 id="offcanvasLeft">hi</h5>
                <button
                  className="btn-close text reset"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">...</div>
            </div>

            <h1 className="nav-brand">
              
                {props.profile.name}
               
              
            </h1>
            <form className="d-flex" >
              <input
                className="form-control me-2  " style={{borderBottomColor :"black"}}
                type="search"
                placeholder="Search"
                aria-label="search" 
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
        <div className="mb-5">
          
        <Project2 className="" list={props.profile.name} />
        </div>
        <div className=""></div>
      </div>
        <div className=" container-fluid m-0 fixed-bottom bg-dark  text-white text-center " ><h2>Footer</h2></div>
    </div>
    </div>
  );
};
export default Project;
