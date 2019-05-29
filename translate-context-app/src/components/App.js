import React, { Component } from 'react';

class App extends Component {
  state = { language: 'english' };
  onLanguageChange = (language) => {
    this.setState({ language: language });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i 
            onClick={() => this.onLanguageChange('english')} 
            className="flag us" 
          />
          <i 
            onClick={() => this.onLanguageChange('dutch')} 
            className="flag nl" 
          />
        </div>
        {this.state.language}
      </div>
    );
  };
}

export default App;