import React, { Component } from 'react';
import './sn.css';

export default class StickyNav extends Component {
    /* 
    
        THE FUNCTION BELOW:
            helps us to add css class to the 
            appropriatel clicked nav link

    */

    justCss = () => {
        document.addEventListener('click', function(e) {
            let className = e.path[0].className.split(' ');
            if (!className.includes('link')) return;

            let links = document.getElementsByClassName('active');
            for (let link of links) {
                link.classList.remove('active');
                e.path[0].classList.add('active');
            }
        });
    };

    componentDidMount() {
        this.justCss();

        window.onscroll = function() {
            stickyIcky();
        };

        let navbar = document.getElementById('navbar');
        let sticky = navbar.offsetTop;

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
                        this.goScroll('contact');
                    }}
                >
                    Contact
                </a>
            </div>
        );
    }
}
