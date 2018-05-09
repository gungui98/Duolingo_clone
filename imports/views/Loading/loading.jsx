import React from 'react';
// core components
import ReactLoading from 'react-loading';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const loadingAlert = withReactContent(Swal);
function Loading() {

    Tracker.autorun(() => {
        if (Session.get("loadingSuscribe")) {
            loadingAlert.fire({
                title: <p>Loading</p>,
                html:<div style={{alignItems:'center',display:'flex',flexDirection:'column'}}>
                    <ReactLoading type = 'bubbles' color='#000' height={100} width={100} />
                </div>,
                timer : 100000,
                showConfirmButton:false,
                allowOutsideClick:false,
            })
        }
        else {
            loadingAlert.fire({
                type:'success',
                text:'Loading successfully',
                timer:1000,
                showConfirmButton:false
            });
        }
    });
}

export default Loading;

