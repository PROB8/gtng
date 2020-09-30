import React from 'react';
import SectionOne from './section-one';
import StickyNav from '../sticky-nav/sticky-nav';
import SellBookSection from '../sections/SellBookSection/SellBookSectionComponent/SellBookSection';
import './head.css';

const Head = _props => (
    <section className="head">
        <header className="backgrounda">
            <div className="shadow-1">
                <div className="header-wrap">
                    <h1 className="header">GTNG</h1>
                    <p className="slogan">
                        <em>boundless</em>
                    </p>
                </div>
            </div>
        </header>
        <StickyNav />

        <SectionOne />
        <SellBookSection />
    </section>
);

export default Head;
