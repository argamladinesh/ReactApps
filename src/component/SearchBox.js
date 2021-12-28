import React, { Component } from 'react'
class SearchBox extends Component {
    state={term:""};
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };
    render() {
        return (
            
                <div className="mb-3 border border-2 border-dark rounded" style={{backgroundColor:"#eadbc8"}}>
                    <form onSubmit={this.onFormSubmit}>
                        <label className="form-label text-secondary "><h3>Image search   <i className="bi bi-search"></i></h3></label>
                        <input type="text" className="form-control border-top  border-bottom-0  border-start-0 border-end-0 border-dark border-2 "style={{backgroundColor:"#eadbc8"}} placeholder="Search Here... " value={this.state.term}
                        onChange={(e)=>this.setState({term:e.target.value}) }></input>
                    </form>
                </div>
                
          
        );
    }
}
export default SearchBox;
