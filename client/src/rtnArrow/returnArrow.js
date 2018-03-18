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

    movePage = (yOff) => {

        function run(n){
            console.log('working')
            if ( n > 0 ) {
                setTimeout(function(){
                    let newLocation = n - 7
                    console.log('look', newLocation)
                    window.scrollTo(0, newLocation) 
                    run(newLocation)
                }, -100 )
            
            }
        }
        
        run(yOff)
        
    }

    render() {

        return (
            <div id='arrow' className='arrow-box'>
                <a className='up-arrow-link'  
                onClick={()=>{
                    let loc = window.pageYOffset;
                    this.movePage(loc)
                }}>
                    <i className="fas fa-angle-up fa-2x"></i>
                </a>
            </div>
        )
    }
}