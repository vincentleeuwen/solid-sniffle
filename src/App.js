import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import MedFileRequest from './components/MedFileRequest';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/:id" component={MedFileRequest}/>
      </Router>
    );
  }
}

export default App;
