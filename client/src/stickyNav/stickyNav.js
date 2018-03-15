import React, {Component} from 'react';
import './sn.css';

export default class StickyNav extends Component {

    componentDidMount() {
        document.addEventListener('click', function(e) {

            if (!e.path[0].hash) return

            let links = document.getElementsByClassName('active')
            console.log(e.path)
            for (let link of links) {
                
                link.classList.remove('active')
                e.path[0].classList.add('active')
            }

            

          
        })

        window.onscroll = function() {myFunction()};

        let navbar = document.getElementById('navbar');
        let sticky = navbar.offsetTop;

        function myFunction() {
            // console.log(window.pageYOffset, sticky)
        if (window.pageYOffset >= sticky) {
            navbar.classList.add('sticky')
        } else {
            navbar.classList.remove('sticky');
        }
        }
    }
    render() {
        return (
            <div id='navbar'>
                <div className='filler'></div>
                <a className='link active' href='' onClick={(e) => {
                   e.preventDefault()
                   window.scrollTo(0,0)
                }}>Home</a>
                <a className='link' href='' onClick={(e) => {
                   e.preventDefault()
                   window.scrollTo(0,890)
                }}>About Us</a>
                <a className='link' href='' onClick={(e)=> {
                    e.preventDefault()
                    window.scrollTo(0,2405)
                }}>Contact</a>
            </div>

        )
    }
}