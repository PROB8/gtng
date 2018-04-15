import React, { Component } from 'react';
import ln from './ln.png';
import ig from './ig.png';
import './footer.css';
import GTNGPartner from '../partnerForm/gtngPartner';
import request from 'superagent';

export default class Footer extends Component {
    state = {
        display: 'none',
        iframe: ''
    };

    call = () => {
        request.get('/form').then(res => console.log(res));
    };

    modalDisplay = () => {
        if (this.state.display === 'none') {
            this.setState({ display: 'block' });
        } else {
            this.setState({ display: 'none' });
        }

        let overflow = document.getElementById('body').style.overflow;
        if (this.state.display === 'block') {
            overflow = 'hidden';
        }

        if (overflow === 'hidden') {
            overflow = 'auto';
        }
    };

    render() {
        let iframe = (
            <iframe
                title="application form"
                height="315"
                width="560"
                scrolling="yes"
                allowFullScreen=""
                frameBorder="0"
                src="https://www.jahanaeemgitonga.com"
            >
                {/* src="https://form.jotform.com/80746079884169" */}
            </iframe>
        );

        return (
            <footer className="footer contact">
                <div className="wrap">
                    <section className="section-1">
                        <div className="container a">
                            <h6>MISSION </h6>
                            <p>Mobile and Web apps, to infinity and beyond!</p>
                        </div>
                        <div className="container b">
                            <a
                                onClick={() => {
                                    this.setState({ iframe: iframe });
                                    this.modalDisplay();
                                }}
                            >
                                <h6 className="careers">CAREERS</h6>
                            </a>
                        </div>
                    </section>
                    <section className="section-2">
                        <div className="container a">
                            <h6>SOCIAL WE</h6>

                            <ul className="social-1">
                                <li className="social ">
                                    <div className="pic-wrap">
                                        <a href="https://www.linkedin.com/company/gtng/">
                                            <img
                                                className="logo"
                                                src={ln}
                                                alt="Black Tech meetup"
                                            />
                                        </a>
                                    </div>
                                </li>
                                <li className="social ">
                                    <div className="pic-wrap">
                                        <a href="https://www.instagram.com/gtng_tech/">
                                            <img
                                                className="logo"
                                                src={ig}
                                                alt="State of Black Tech meetup"
                                            />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="container b">
                            <h6>CONTACT US</h6>
                            <div className="two">
                                <p>info@gtng.tech</p>
                                <p>384 Northyard Blvd NW, Atlanta, GA 30313</p>
                                <p>404-670-0059</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="btm-line">
                    <p className="btm-line-text">Copyright &copy; 2018 GTNG </p>
                </div>
                <GTNGPartner
                    display={this.state.display}
                    modalDisplay={this.modalDisplay}
                    iframe={this.state.iframe}
                />
            </footer>
        );
    }
}
