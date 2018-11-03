import React from 'react';
import pix1 from '../pix/welcome.png';
import pix2 from '../pix/salaam.png';
import pix3 from '../pix/bienvenidos.png';
import pix4 from '../pix/bienvenue.png';
import pix5 from '../pix/mandarin.png';
import pix6 from '../pix/peace.png';
import './slideshow.css';

const SlideShow = function() {
    return (
        <div id="slide-show" className="subject greetings">
            <ul className="slide-show">
                <li className="mySlides">
                    <img className="greeting" alt="css3" src={pix1} />
                </li>
                <li className="mySlides">
                    <img className="greeting" alt="" src={pix6} />
                </li>
                <li className="mySlides">
                    <img className="greeting" alt="" src={pix2} />
                </li>
                <li className="mySlides">
                    <img className="greeting" alt="" src={pix3} />
                </li>
                <li className="mySlides">
                    <img className="greeting" alt="" src={pix4} />
                </li>
                <li className="mySlides">
                    <img className="greeting" alt="" src={pix5} />
                </li>
            </ul>
        </div>
    );
};

export default SlideShow;
