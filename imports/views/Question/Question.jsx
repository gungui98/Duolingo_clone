import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

import Devider from 'material-ui/Divider'
import Button from 'material-ui/Button';

class Question extends React.Component{
    // constructor(){
    //     super();
    //
    //     this.state = {
    //         paneColor: '#000'
    //     }
    // }
    // wrongAnswer(){
    //     this.setState({
    //         paneColor:'#FFCFCC'
    //     });
    // }
    // rightAnswer(){
    //     this.setState({
    //         paneColor:'#B1FF95'
    //     });
    // }
   render(){
       // let color = this.state.paneColor;
       return(
               <div style={{height:'60vh',marginTop:'2vh'}}>
                   <div style={{height:'70vh'}}>
                        question goes here
                   </div>
               </div>
       )
   }y
}
export default Question;