import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     term: ''
  //   }
  // };
  onFormSubmit = (event) => { // arrow function binds 'this' to the component
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  // onInputChange(event) {
  //   this.setState({ term: event.target.value })
  // };
  render() {
    return (
      <div className="ui segment">
        <form 
          className="ui form" 
          onSubmit={this.onFormSubmit}>
            <div className="field">
              <label>Image Search</label>
              <input 
                type="text" 
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value })}  
              />
            </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;