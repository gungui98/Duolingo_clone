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
                <Particles params={params} className = "particles_home"/>
                <container className="btext">
                            <row>
                                <h1>Duolingo </h1>
                            </row>
                            <col xs='auto'>
                                <row>
                                <a href="/signup" className ="register_button" >Đăng ký ngay</a>
                                </row>
                                <row>
                                <Link to="/login">Đã có tài khoản?</Link>
                                </row>
                            </col>
                </container>
            </div>
        );
    }
}