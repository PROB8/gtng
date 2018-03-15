import React from 'react';
import ln from './ln.png';
import ig from './ig.png';
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='wrap'>
                <section className='section-1'>
                    <div className='container a'>
                        <h6>MISSION </h6>
                        <p>Mobile and Web apps, to infinity and beyond!</p>
                    </div>
                    <div className='container b'>
                        <a href='#'><h6>CAREERS</h6></a>
                    </div>
                </section>
                <section className='section-2'>

                    <div className='container a'>
                        <h6>SOCIAL US</h6>

                        <ul>
                            <li><div className='pic-wrap'><a href='https://www.linkedin.com/company/gtng/'><img className='logo' src={ln}/></a></div></li>
                            <li><div className='pic-wrap'><a href='https://www.instagram.com/gtng_tech/'><img className='logo' src={ig}/></a></div></li>
                        </ul>
                    </div>
                    <div className='container b'>
                    <h6>CONTACT US</h6>
                        <div className='two'>
                            <p>info@gtng.tech</p>
                            <p>384 Northyard Blvd, Atlanta, GA 30313</p>
                            <p>404-670-0059</p>
                           
                        </div>
                    </div>
                </section>
            </div>
            <div className='btm-line'>
                <p className='btm-line-text'>&copy; 2018 GTNG </p>
            </div>
        </footer>
    )
}

export default Footer