 import React from 'react'
import {Meteor} from 'meteor/meteor'
import { Link } from 'react-router';
import Particles from 'react-particles-js'
import '../../node_modules/react-bootstrap/dist/react-bootstrap'

export class Home extends React.Component{
    render() {
        let params = {
            particles: {
                move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {  
                    enable: false,
                      rotateX: 600,
                      rotateY: 1200
                    }
                }
            }
        };
        return (
            <div >
                <div className='section'>
                        <Particles className ='particles_home' params={params} />
                        <div className = 'intro'>
                        
                        <div className="container center">
                                    <div className = "row">
                                        <h1>Duolingo </h1>
                                    </div>
                                    <div className = "col">
                                        <div className = "row">
                                        <a href="/signup" className ="register_button" >Đăng ký ngay</a>
                                        </div>
                                        <div className = "row">
                                        <Link to="/login">Đã có tài khoản?</Link>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}