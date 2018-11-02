import React, { Component } from 'react';
import './App.css';
import AOS from 'aos';
import Footer from './footer/footer';
import StickyNav from './stickyNav/stickyNav';
import SlideShow from './slidshow/slideshow';
import ReturnArrow from './rtnArrow/returnArrow';
import ProjectStack from './project-stack';

class App extends Component {
    componentWillMount() {
        window.addEventListener('click', function(e) {
            let arrow = document.getElementById('arrow');
            //this will hide your arrow if you are viewing the application form modal
            if (e.path[0].className === 'careers') {
                arrow.style.display = 'none';
            } else if (e.path[0].className === 'close') {
                arrow.style.display = 'initial';
            }
        });
    }

    componentDidMount() {
        AOS.init({
            easing: 'ease-in-out-sine'
        });
    }

    render() {
        return (
            <div className="App">
                <ReturnArrow />
                <header className="backgrounda">
                    <div className="shadow-1">
                        <div className="header-wrap">
                            <h1 className="header">GTNG™</h1>
                            <p className="slogan">
                                <em>boundless</em>
                            </p>
                        </div>
                    </div>
                </header>
                <StickyNav />
                <div className="this-div3 first">
                    <SlideShow />
                    <div className="content-1">
                        <p>
                            Welcome! Here at GTNG we pride ourselves on being
                            customer oriented and delivering on our promises.
                            While we build your app, you can expect to be well
                            informed and taken care of throughout the entire
                            process. We want you to know that you are in great
                            hands. Trust us to be confidential and protect your
                            intellectual property as if it were our own and
                            let's get started bringing your app or website to
                            life today!
                        </p>
                    </div>
                </div>
                <div className="backgroundb">
                    <div className="shadow" />
                </div>
                <div id="about-us" className="this-div2 about-us">
                    <h2>We're the best at innovation</h2>
                    {/* THESE TWO BOXES ON EXTRA WIDE SCREENS NEED TO BE BROUGHT IN CLOSER */}
                    <div className="box-blue" data-aos="fade-right">
                        <p>
                            Our team has a great track record of innovation. We
                            actively use the latest and greatest in web and
                            mobile development technologies. If you have a
                            technology that we are not familiar with our
                            engineering team will be more than happy to learn
                            those skills to best serve you!
                        </p>
                    </div>

                    <div className="box-red" data-aos="fade-left">
                        <p>
                            Below is a list of some of the technologies we use,
                            or have used while building products for our
                            clients:
                        </p>
                        <ProjectStack />
                    </div>
                </div>
                <div className="backgroundc">
                    <div className="shadow" />
                </div>
                <div className="this-div3">
                    <div className="subject">
                        <h5>APPS</h5>
                    </div>
                    <div className="content">
                        <p>
                            These are some of the recent apps and websites we
                            have engineered:
                        </p>
                        <ul>
                            <li>
                                <a href="http://www.connexapp.com">
                                    Connex App
                                </a>
                            </li>
                            <li>
                                <a href="https://www.ninety.io">Ninety.io </a>
                            </li>
                            <li>
                                <a href="https://gabriellezalina.herokuapp.com">
                                    Gabrielle Zalina
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
