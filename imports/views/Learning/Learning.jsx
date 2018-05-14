import React from 'react';
// core components
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);
import { LinearProgress } from 'material-ui/Progress';
import Question from '../Question/Question.jsx'
import Button from "material-ui/es/Button/Button";

let paneColor = '#fff';

function wrongAnswer() {
    paneColor='#FFCFCC';
}

function rightAnswer(){
    paneColor='#B1FF95'
}
export default function Learn(topic){

    MySwal.fire({
        position:'top-left',
        html:
        <div style={{height:'100%',width:'100%'}}>
            <LinearProgress style ={{margin:'0vh 4vw 0vh 4vw'}} variant="determinate" value={10} />

            <Question/>
            <div style={{height:'15vh',backgroundColor:paneColor,borderRadius:'15px'  }}>
                <Button size ='large' variant="raised" color="primary" onClick = {wrongAnswer.bind(this)} style ={{borderRadius: 500,
                    margin: '5vh'}} >
                    cancel
                </Button>
                <Button size = 'large' variant="raised" onClick = {rightAnswer.bind(this)} style ={{borderRadius: 500,
                    margin: '5vh',backgroundColor:'#4FC000'}}>
                    submit
                </Button>
            </div>
        </div>,
        width:'100%',
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton:false,
        focusConfirm: false,
        allowOutsideClick: false,

    })
}