import React from 'react';
import {Session} from 'meteor/session';
// core components
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);
import { LinearProgress } from 'material-ui/Progress';
import Question from '../Question/Question.jsx'
// import MobileStepper from "material-ui/es/MobileStepper/MobileStepper";
// import Button from "../../components/CustomButtons/Button";
// import KeyboardArrowLeft from "@material-ui/icons/es/KeyboardArrowLeft";
// import KeyboardArrowRight from "@material-ui/icons/es/KeyboardArrowRight";

export default function Learn(topic){
    console.log('alert from learn')
    MySwal.fire({
        position:'top-left',
        html:
        <div style={{height:'100%',width:'100%'}}>
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
