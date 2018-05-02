import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

import Devider from 'material-ui/Divider'
import Button from 'material-ui/Button';

class Question extends React.Component{
    constructor(){
        super();

        this.state = {
            paneColor: '#000'
        }
    }
    wrongAnswer(){
        this.setState({
            paneColor:'#FFCFCC'
        });
    }
    rightAnswer(){
        this.setState({
            paneColor:'#B1FF95'
        });
    }
   render(){
       let color = this.state.paneColor;
       return(
               <div style={{height:'85vh',marginTop:'2vh'}}>
                   <div style={{height:'70vh'}}>
                        question goes here
                   </div>
                   <Devider/>
                   <div style={{height:'15vh',backgroundColor:this.state.paneColor,borderRadius:'15px'  }}>
                       <Button size ='large' variant="raised" color="primary" onClick = {this.wrongAnswer.bind(this)} style ={{borderRadius: 500,
                           margin: '5vh'}} >
                           cancel
                       </Button>
                       <Button size = 'large' variant="raised" onClick = {this.rightAnswer.bind(this)} style ={{borderRadius: 500,
                           margin: '5vh',backgroundColor:'#4FC000'}}>
                           submit
                       </Button>
                   </div>
               </div>
       )
   }y
}
export default Question;