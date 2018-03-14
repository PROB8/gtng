import React from 'react';
import ln from './ln.png';
import ig from './ig.png';
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer this-div'>
            <div className='wrap'>
                <div className='logo-container'>
                    <ul>
                        <li><div className='pic-wrap'><a href='https://www.linkedin.com/company/gtng/'><img className='logo' src={ln}/></a></div></li>
                        <li><div className='pic-wrap'><a href='https://www.instagram.com/gtng_tech/'><img className='logo' src={ig}/></a></div></li>
                    </ul>
                </div>
                <div className='btm-line'>
                    <p className='btm-line-text'>GTNG &copy; 2018</p>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer