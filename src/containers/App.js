import React, { Component } from 'react';
import './App.css';

import PrimaryNav from '../components/PrimaryNav'
import SecondaryNav from '../components/SecondaryNav'

class App extends Component {
  render() {
    //const { something } = this.state

    return (
      <div className="app">
        <nav className="nav">
          <PrimaryNav title={'Climbing App'}/>
          <SecondaryNav/>
        </nav>
        <main>
          <p>SOME SWEET CONTENT!</p>
        </main>
      </div>
    );
  }
}

export default App;
