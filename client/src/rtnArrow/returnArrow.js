import React, {Component} from 'react';
import './returnArrow.css';

export default class ReturnArrow extends Component {

    componentDidMount() {
        let windowScroll = window.pageYOffset
        let arrowDisplay = document.getElementById('arrow')

        if (windowScroll < 500) {
            arrowDisplay.style.display = 'none'
        }

        window.addEventListener('scroll',function() {
            if(window.pageYOffset > 500) {
                arrowDisplay.style.display = 'initial'
            }
            else {
                arrowDisplay.style.display = 'none'
            }
        })
    }

    scrolling = (yOff) => {

        function scroll(n){
            if ( n > 5 ) {
                setTimeout(function(){
                    let newLocation = n / 1.03
                    window.scrollTo(0, newLocation) 
                    scroll(newLocation)
                }, 0 )
            
            }
        }
        
        scroll(yOff)
        
    }

    render() {

        return (
            <div id='arrow' className='arrow-box'>
                <a className='up-arrow-link'  
                onClick={()=>{
                    let loc = window.pageYOffset;
                    this.scrolling(loc)
                }}>
                    <i className="fas fa-angle-up fa-2x"></i>
                </a>
            </div>
        )
    }
}