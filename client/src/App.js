import React, { Component } from 'react';
import './App.css';
import AOS from 'aos';
import Footer from './footer/footer';
import StickyNav from './stickyNav/stickyNav';
import SlideShow from './slidshow/slideshow';
import ReturnArrow from './rtnArrow/returnArrow';


class App extends Component {
    
    componentWillMount() {
        window.addEventListener('click', function(e) {
            let arrow = document.getElementById('arrow')
            if (e.path[0].className === 'careers') {
                
                arrow.style.display = 'none'
            }
            else if (e.path[0].className === 'close') {
                arrow.style.display = 'initial'
            }
        })
    
    }

    componentDidMount() {
        AOS.init({
            easing: 'ease-in-out-sine',
        })
    }

    render() {
        
        return (
        <div className="App">
            <ReturnArrow />
            <header className="backgrounda">

                <div className='shadow-1'>
                <div className='header-wrap'>

                    <h1 className='header'>GTNG</h1>
                    <p className='slogan'><em>boundless</em></p>

                </div>
                </div>
            </header>
            <StickyNav />
            <div className='this-div3 first'>
               <SlideShow/>
                <div className='content-1'>
                    <h6></h6>
                    <p>"Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt </p>
                </div>

            </div>
            <div className="backgroundb">
              
                <div className='shadow'>
                </div>
            </div>
            <div id='about-us'className='this-div2 about-us'>
            <h2>We're the best at innovation</h2>
            <div className='box-blue' data-aos="fade-right">
                <p>N"Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt 
                </p>
               
             
            </div>
            
           <div className='box-red' data-aos="fade-left">
            <p>"Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt </p>
            </div>
            
            </div>
            <div className="backgroundc">
              
                <div className='shadow'>
            </div> 
            </div>
            <div className='this-div3'>
                <div className='subject'>
                    <h5>APPS</h5>
                </div>
                <div className='content'>
                    <h6></h6>
                    <p>"Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt 
                    </p>
                    <p>"Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt 
                    </p>
                   
                </div>
            </div>
            <Footer />
        </div>
        );
    }
}

export default App;
