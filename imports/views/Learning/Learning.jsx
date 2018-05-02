import React from 'react';
// core components
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);
import { LinearProgress } from 'material-ui/Progress';
import Question from '../Question/Question.jsx'

export default function Learn(topic){
    MySwal.fire({
        position:'top-left',
        html:
        <div style={{height:'100%',width:'100%'}}>
            <LinearProgress style ={{margin:'0vh 4vw 0vh 4vw'}} variant="determinate" value={10} />
            <Question/>
        </div>,
        width:'100%',
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton:false,
        focusConfirm: false,
        allowOutsideClick: false,

    })
}