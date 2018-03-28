import React from 'react'
import {Meteor} from 'meteor/meteor'
import { Link } from 'react-router';
import Particles from 'react-particles-js'
import '../../node_modules/react-bootstrap/dist/react-bootstrap'
import {Container,Row,Col,Badge,CardImg} from 'reactstrap'

export class Home extends React.Component{
    render() {
        const btext = {
            color: '#f9f3f4',
            position: 'absolute',
            textAlign: 'center',
            top: '40%',
            width: '100%',
            lineHeight: '0.4em',
        }
        const particle = {
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: '#0F1331',
        }
        const btn = {
            color: '#fff',
            textDecoration: 'none',
            border: '#ccc 1px solid',
            padding: '7px 13px',
            borderRadius: '8px',
            lineHeight: '4em',
        }
        return (
            <div >
                <Particles string='/particles.json' out_mode='out' style = {particle}/>
                <Container style = {btext}>
                    <Row>
                            <Row>
                                <h1>Duolingo <Badge color="secondary">Demo</Badge></h1>
                            </Row>
                            <Col xs='auto'>
                                <Row>
                                <a href="/signup" style={btn} >Đăng ký ngay</a>
                                </Row>
                                <Row>
                                <Link to="/login">Đã có tài khoản?</Link>
                                </Row>
                            </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}