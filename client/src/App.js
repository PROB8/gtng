import React, { Component } from 'react';
import './App.css';
import AOS from 'aos'

class App extends Component {
    constructor(props, context) { 
        super(props, context); 
        AOS.init({
            easing: 'ease-in-out-sine'
          }); 
    } 
   

    render() {

        return (
        <div className="App">
            <div className="backgrounda">
                <h1>BACKGROUND 1</h1>
                <div className='shadow'>
                </div>
            </div>
            <div className='this-div'>
                PEEP DIS SHIT
            </div>
            <div className="backgroundb">
                <h1>BACKGROUND 2</h1>
                <div className='shadow'>
                </div>
            </div>
            <div className='this-div'>
            <div className='box-blue' data-aos="fade-right">
                look at me
            </div>
            <div className='box-red' data-aos="fade-left">
                look at me
            </div>
            </div>
            <div className="backgroundc">
                <h1>BACKGROUND 3</h1>
                <div className='shadow'>
            </div>
            </div>
            <div className='this-div'>
           
            </div>
        </div>
        );
    }
}

export default App;
