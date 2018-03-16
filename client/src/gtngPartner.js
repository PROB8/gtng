import React, {Component} from 'react';
import './gp.css';

export default class GTNGPartner extends Component {


    render() {
        
        return (
            <div id='modal' style={{display:this.props.display}}>
                
                <h1  className='close'onClick={this.props.modalDisplay} > x </h1>
                <iframe 
                    allowfullscreen='true'
                    allowtransparency='true'
                    src="https://form.jotform.com/80746079884169">
                </iframe>
            </div>
        )
    }
}
