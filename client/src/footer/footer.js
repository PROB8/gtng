import React, {Component} from 'react';
import ln from './ln.png';
import ig from './ig.png';
import './footer.css';
import GTNGPartner from '../partnerForm/gtngPartner';

export default class Footer extends Component {
    state = {
        display:'none'
    }

    modalDisplay = () => {
        if (this.state.display === 'none') {
            this.setState({display:'block'})
        }
        else {
            this.setState({display:'none'})
        }

        let overflow = document.getElementsByTagName('body')[0].style.overflow
        if(this.state.display === 'block') {
            overflow = 'hidden'
        }

        if(overflow === 'hidden') {
            overflow = 'auto'
        }
    }

    render () {
        return (
            <footer className='footer contact'>
                <div className='wrap'>
                    <section className='section-1'>
                        <div className='container a'>
                            <h6>MISSION </h6>
                            <p>Mobile and Web apps, to infinity and beyond!</p>
                        </div>
                        <div className='container b'>
                            <a onClick={()=>{
                                this.modalDisplay()
                            }}><h6 className='careers'>CAREERS</h6></a>
                        </div>
                    </section>
                    <section className='section-2'> 
    
                        <div className='container a'>
                            <h6>SOCIAL US</h6>
    
                            <ul className='social-1'>
                                <li className='social ' ><div className='pic-wrap'><a href='https://www.linkedin.com/company/gtng/'><img className='logo' src={ln}/></a></div></li>
                                <li className='social '><div className='pic-wrap'><a href='https://www.instagram.com/gtng_tech/'><img className='logo' src={ig}/></a></div></li>
                            </ul>
                        </div>
                        <div className='container b'>
                        <h6>CONTACT US</h6>
                            <div className='two'>
                                <p>info@gtng.tech</p>
                                <p>384 Northyard Blvd NW, Atlanta, GA 30313</p>
                                <p>404-670-0059</p>
                            
                            </div>
                        </div>
                    </section>
                </div>
                <div className='btm-line'>
                    <p className='btm-line-text'>&copy; 2018 GTNG </p>
                </div>
                <GTNGPartner display={this.state.display} modalDisplay={this.modalDisplay} />
            </footer>
        )
    }
}
