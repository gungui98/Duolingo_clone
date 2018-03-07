import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Particles from 'react-particles-js';

export default class App extends Component{

    constructor() {
        super();
    }
    render() {
    const btext ={
        color: '#f9f3f4',
        position: 'absolute',
        textAlign: 'center',
        top: '40%',
        width: '100%',
        lineHeight: '0.4em',
    }
    const particle={
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#0F1331',
    }
    const btn = {
        color: '#fff',
        textDecoration: 'none',
        border: '#ccc 1px solid',
        padding: '10px 15px',
        borderRadius: '8px',
        lineHeight: '4em',
    }
    return (
        <div >
            <Particles style ={particle} />
            <div style={btext}>
                <h1>Duolingo clone</h1>
                <p>Website is under construction</p>
                <a href="https://github.com/gungui98/Duolingo_clone" style={btn} >Get Started</a>
            </div>
        </div>
    );
    }

}
