import React from 'react';
import SlideShow from '../slideshow/slideshow';
import StickyNav from '../sticky-nav/sticky-nav';

const SectionOne = props => (
    <section>
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
                    Welcome! Here at GTNG we pride ourselves on being customer
                    oriented and delivering on our promises. While we build your
                    app, you can expect to be well informed and taken care of
                    throughout the entire process. We want you to know that you
                    are in great hands. Trust us to be confidential and protect
                    your intellectual property as if it were our own and let's
                    get started bringing your app or website to life today!
                </p>
            </div>
        </div>
    </section>
);

export default SectionOne;
