import React, { Component } from 'react';
import './App.css';
import aos from 'aos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="backgrounda">
            <h1>BACKGROUND 1</h1>
            <div class='shadow'>
            </div>
        </div>
        <div class='this-div'>
            PEEP DIS SHIT
        </div>
        <div class="backgroundb">
            <h1>BACKGROUND 2</h1>
            <div class='shadow'>
            </div>
        </div>
        <div class='this-div'>
        </div>
        <div class="backgroundc">
            <h1>BACKGROUND 3</h1>
            <div class='shadow'>
        </div>
        </div>
        <div class='this-div'>
        </div>
      </div>
    );
  }
}

export default App;
