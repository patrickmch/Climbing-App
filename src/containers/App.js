import React, { Component } from 'react';
import './App.css';

import PrimaryNav from '../components/PrimaryNav'

class App extends Component {
  render() {
    //const { something } = this.state

    return (
      <div className="app">
        <PrimaryNav title={'Climbing App'}/>

        <main>
        </main>
      </div>
    );
  }
}

export default App;
