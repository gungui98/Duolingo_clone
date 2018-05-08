import React from 'react';
// core components
import ReactLoading from 'react-loading';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);
function Loading() {

    Tracker.autorun(() => {
        if (Session.get("loadingSuscribe")) {
            console.log("triggered");
            MySwal.fire({
                title: <p>Loading</p>,
                html:<div style={{alignItems:'center',display:'flex',flexDirection:'column'}}>
                    <ReactLoading type = 'bubbles' color='#000' height={100} width={100} />
                </div>,
                timer : 1000000,
                showConfirmButton:false,
                allowOutsideClick:false,
            })
        }
        else {
            MySwal.fire({
                type:'success',
                text:'Loading successfully',
                timer:1000,
                showConfirmButton:false
            });
        }
    });
}

export default Loading;

