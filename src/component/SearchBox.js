import React, { Component } from 'react'

class SearchBox extends Component {
    state={term:""};
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };
    render() {
        return (
            <div className="ui segement">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label>Image search</label>
                    <input type="text" className="field" value={this.state.term}
                    onChange={(e)=>this.setState({term:e.target.value}) }></input>
                </form>
                
            </div>
        );
    }
}
export default SearchBox;
