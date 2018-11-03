import React, { Component } from 'react';
import { listeners } from '../helpers';
import './sn.css';

export default class StickyNav extends Component {
    

    componentDidMount() {
        listeners.justCss();

        window.onscroll = function() {
            stickyIcky();
        };

        const navbar = document.getElementById('navbar');
        const sticky = navbar.offsetTop;

        function stickyIcky() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        }
    }

    goScroll = elmt => {
        let pos = document.getElementsByClassName(elmt)[0].offsetTop;
        console.log(pos);
        window.scrollTo(0, pos - 75);
    };

    render() {
        return (
            <div id="navbar">
                <div className="filler" />
                <a
                    className="link active"
                    href="/"
                    onClick={e => {
                        e.preventDefault();
                        this.goScroll('first'); //RETHINK BECAUSE Y CHANGES ON SMALLER SCREENS
                    }}
                >
                    Home
                </a>
                <a
                    className="link"
                    href="/"
                    onClick={e => {
                        e.preventDefault();
                        this.goScroll('about-us');
                    }}
                >
                    About Us
                </a>
                <a
                    className="link cnt"
                    href="/"
                    onClick={e => {
                        e.preventDefault();
                        this.goScroll('services');
                    }}
                >
                    Services
                </a>
                <a
                    className="link cnt"
                    href="/"
                    onClick={e => {
                        e.preventDefault();
                        this.goScroll('contact');
                    }}
                >
                    Contact
                </a>
            </div>
        );
    }
}
