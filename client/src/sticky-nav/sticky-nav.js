import React, { Component } from 'react';
import { listeners, tools } from '../helpers';
import './sn.css';
import links from './links.json';

export default class StickyNav extends Component {
    
    componentDidMount() {
        listeners.activateTabOnClick();
        listeners.activateTabOnScroll(links);
        const navbar = document.getElementById('navbar');
        const sticky = navbar.offsetTop;
        window.onscroll = function() {
            tools.stickyNav(navbar, sticky);
        };
    }

    render() {
        return (
            <nav id='navbar' className='scroll'>
                <span className='filler' />
                    {links.map((link, i) => (
                        <a
                            id={link['link-id']}
                            key={i}
                            href={link.href}
                            className={link.class}
                            onClick={e => {
                                e.preventDefault();
                                tools.scrollTo(link['container-id'])
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
            </nav>
        );
    }
}
