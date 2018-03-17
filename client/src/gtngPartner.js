import React, {Component} from 'react';
import './gp.css';

export default class GTNGPartner extends Component {
    componentDidMount() {
    }

    render() {
        
        return (
            <div id='modal' style={{display:this.props.display}}>
                
                <h1  className='close'onClick={this.props.modalDisplay} > x </h1>
                <iframe
                    id='iframe' 
                    allowFullScreen='true'
                    allowTransparency='true'
                    marginheight='80px'
                    marginwidth='80px'
                    src="https://form.jotform.com/80746079884169">
                </iframe>
            </div>
        )
    }
}
