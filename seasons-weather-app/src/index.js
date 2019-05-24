import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errorMessage: ''
    };
  }
  // state = { lat: null, errorMessage: '' }; // is equivalent
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  // componentDidUpdate() {
  //   console.log('My component was just updated')
  // }
  renderContent = () => {
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat}/>;
    }
    return <Spinner message="Please accept location request"/>;
  }
  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }  
};

ReactDOM.render(
  <App />, document.querySelector('#root')
);