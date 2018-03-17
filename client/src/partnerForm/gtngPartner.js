import React, {Component} from 'react';
import './gp.css';

export default class GTNGPartner extends Component {
    componentDidMount() {
    }

    render() {
        
        return (
            <div id='modal' style={{display:this.props.display}}>
                {/* <h1  className='close'onClick={this.props.modalDisplay} > close </h1> */}
                <div className='wrapper'>
                   
                    <iframe
                        height="315" width="560" 
                        allowfullscreen="" 
                        frameborder="0"     
                        src="https://form.jotform.com/80746079884169">
                    </iframe>
                </div>                
            </div>
        )
    }
}
