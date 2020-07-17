import React, { Component } from 'react';
import Main from './components/MainComponent';
import BackgroundVideo from './components/video';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
          <BackgroundVideo />
        </div>

      </BrowserRouter>
    );
  }
}
export default App;
