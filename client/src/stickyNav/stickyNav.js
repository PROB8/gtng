import React, {Component} from 'react';
import './sn.css';

export default class StickyNav extends Component {

    componentDidMount(){
        // if (window.)
        window.onscroll = function() {myFunction()};

        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;

        function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
        }
    }
    render() {
        return (
            <div id="navbar">
                <a className="active" href="javascript:void(0)">Home</a>
                <a href="javascript:void(0)">News</a>
                <a href="javascript:void(0)">Contact</a>
            </div>

        )
    }
}