import React, { Component } from 'react';
import './App.css';
import AOS from 'aos';
import Footer from './footer/footer';
import StickyNav from './stickyNav/stickyNav';

class App extends Component {
    constructor(props, context) { 
        super(props, context); 
       
    } 
    componentDidMount() {
        // if(window.innerWidth > 850) {
            AOS.init({
                easing: 'ease-in-out-sine',
                // disable: window.innerWidth < 750
              }); 
        // }
        window.onresize = function(e) {
            console.log('working')
            if(window.innerWidth <= 850) {
                AOS.disable
            }
        }
        console.log((AOS.disable))
    }

    render() {
        if(window.innerWidth < 850) {
            console.log(AOS)
        }
        let style = {
            margin:'auto',
            maxWidth:'650px',
        }
        return (
        <div className="App">
            <div className="backgrounda">
              
                <div className='shadow'>
                </div>
            </div>
            <StickyNav />
            <div className='this-div'>
                <div style={style}
                ><p>So many battlefield scars while driven in plush cars
                    This life as a rap star is nothin' without guard
                    Was born rough and rugged, addressin' the mass public
                    My attitude was "fuck it," because motherfuckers love it
                    To be a soldier, must maintain composure at ease
                    Though life is complicated, only what you make it to be
                    Uh, and my ambitions as a ridah
                    To catch her while she hot and horny, go up inside her
                    </p>
                </div>

            </div>
            <div className="backgroundb">
              
                <div className='shadow'>
                </div>
            </div>
            <div className='this-div2'>
            <h2>We are the best at innovation</h2>
            <div className='box-blue' data-aos="fade-right">
                <p>Now it's on and it's on because I said so
                    Can't trust a bitch in the business, so I got with Death Row
                    Now these money-hungry bitches gettin' suspicious
                    Started plottin' and plannin' on schemes to come and trick us
                    But thug niggas be on point and game tight
                    Me, Syke and Bogart strapped up the same night
                    Got problems, then handle it, motherfuckers see me
                    These niggas is jealous
                    ‘Cause deep in they heart they wanna be me
                    Uh, yeah, and now you got me right beside ya, hopin' you listen
                    I catch you payin' attention to my ambitions</p>
               
             
            </div>
            
           <div className='box-red' data-aos="fade-left">
            <p>Then I spit some game in her ear, "Go to the telly, hoe!"
Equipped with money in a Benz ‘cause, bitch, I'm barely broke
I'm smokin' bomb-ass weed, feelin' crucial
From player to player the game's tight, the feeling's mutual
From hustlin' and prayers to breakin' motherfuckers to pay up
I got no time for these bitches, ‘cause these hoes try to play us
I'm on a meal ticket mission, want a mill, so I'm wishin'
Competition got me ripped on that bullshit they stressin'
I'ma rhyme though, clown hoes like it's mandatory
No guts, no glory, my nigga, bitch got the game distorted</p></div>
            
            </div>
            <div className="backgroundc">
              
                <div className='shadow'>
            </div> 
            </div>
            <div className='this-div'>
            <p>Then I spit some game in her ear, "Go to the telly, hoe!"
Equipped with money in a Benz ‘cause, bitch, I'm barely broke
I'm smokin' bomb-ass weed, feelin' crucial
From player to player the game's tight, the feeling's mutual
From hustlin' and prayers to breakin' motherfuckers to pay up
I got no time for these bitches, ‘cause these hoes try to play us
I'm on a meal ticket mission, want a mill, so I'm wishin'
Competition got me ripped on that bullshit they stressin'
I'ma rhyme though, clown hoes like it's mandatory
No guts, no glory, my nigga, bitch got the game distorted</p>
<p>Then I spit some game in her ear, "Go to the telly, hoe!"
Equipped with money in a Benz ‘cause, bitch, I'm barely broke
I'm smokin' bomb-ass weed, feelin' crucial
From player to player the game's tight, the feeling's mutual
From hustlin' and prayers to breakin' motherfuckers to pay up
I got no time for these bitches, ‘cause these hoes try to play us
I'm on a meal ticket mission, want a mill, so I'm wishin'
Competition got me ripped on that bullshit they stressin'
I'ma rhyme though, clown hoes like it's mandatory
No guts, no glory, my nigga, bitch got the game distorted</p>
<p>Then I spit some game in her ear, "Go to the telly, hoe!"
Equipped with money in a Benz ‘cause, bitch, I'm barely broke
I'm smokin' bomb-ass weed, feelin' crucial
From player to player the game's tight, the feeling's mutual
From hustlin' and prayers to breakin' motherfuckers to pay up
I got no time for these bitches, ‘cause these hoes try to play us
I'm on a meal ticket mission, want a mill, so I'm wishin'
Competition got me ripped on that bullshit they stressin'
I'ma rhyme though, clown hoes like it's mandatory
No guts, no glory, my nigga, bitch got the game distorted</p>
            </div>
            <Footer />
        </div>
        );
    }
}

export default App;
