import React, { Component } from 'react';
import './App.css';
import AOS from 'aos';
import Footer from './footer/footer';
import StickyNav from './stickyNav/stickyNav';
import SlideShow from './slidshow/slideshow';
import GTNGPartner from './gtngPartner';

class App extends Component {
  
    componentDidMount() {
        AOS.init({
            easing: 'ease-in-out-sine',
        })
    }

    render() {
        
        return (
        <div className="App">
            <header className="backgrounda">

                <div className='shadow-1'>
                <div className='header-wrap'>

                    <h1 className='header'>GTNG</h1>
                    <p className='slogan'><em>boundless</em></p>

                </div>
                </div>
            </header>
            <StickyNav />
            <div className='this-div3 first'>
               <SlideShow/>
                <div className='content-1'>
                    <h6></h6>
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

            </div>
            <div className="backgroundb">
              
                <div className='shadow'>
                </div>
            </div>
            <div id='about-us'className='this-div2 about-us'>
            <h2>We're the best at innovation</h2>
            <div className='box-blue' data-aos="fade-right">
                <p>Now it's on and it's on because I said so
                    Can't trust a bitch in the business, so I got with Death Row
                    Now these money-hungry bitches gettin' suspicious
                    Started plottin' and plannin' on schemes to come and trick us
                    But thug niggas be on point and game tight
                    Me, Syke and Bogart strapped up the same night
                    Got problems, then handle it, motherfuckers see me
                    Thes</p>
               
             
            </div>
            
           <div className='box-red' data-aos="fade-left">
            <p>Then I spit some game in her ear, "Go to the telly, hoe!"
                Equipped with money in a Benz ‘cause, bitch, I'm barely broke
                I'm smokin' bomb-ass weed, feelin' crucial
                From player to player the game's tight, the feeling's mutual
                From hustlin' and prayers to breakin' motherfuckers to pay up
                I got no time for these bitc</p>
            </div>
            
            </div>
            <div className="backgroundc">
              
                <div className='shadow'>
            </div> 
            </div>
            <div className='this-div3'>
                <div className='subject'>
                    <h5>APPS</h5>
                </div>
                <div className='content'>
                    <h6></h6>
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
            </div>
            <Footer />
        </div>
        );
    }
}

export default App;
