import React, { Component } from 'react';
import { listeners, tools } from '../helpers';
import './sn.css';
import links from './links.json';

export default class StickyNav extends Component {
    

    componentDidMount() {
        listeners.justCss();
            
        const navbar = document.getElementById('navbar');
        const sticky = navbar.offsetTop;
        
        window.onscroll = function() {
            tools.stickyNav(navbar, sticky);
        };
    }

    

    render() {
        return (
            <div id="navbar">
                <div className="filler" />
                {links.map(link => (
                    <a 
                        href={link.href}
                        className={link.class}
                        onClick={e => {
                            e.preventDefault();
                            tools.goScroll(link.location)
                        }}
                    >
                        {link.name}
                    </a>
                ))}
                
            </div>
        );
    }
}
