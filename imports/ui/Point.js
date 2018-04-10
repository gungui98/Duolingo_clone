import React from 'react';

export default class Point extends React.Component{

    render(){
        st = {
            width: this.props.point ,
        }
        console.log(st);
        return(
            <div className="row container">
                <div className="col s12 m1">
                    <a href="/" className="brand-logo center grey-text text-darken-1 ">
                        <i className="material-icons" style={{}}>close</i>
                    </a>
                </div>
                <div className="col s12 m11 progress">
                    <div className="determinate" style={{width: this.props.point+ "%"}}>
                    </div>
                </div>
            </div>
        )
    }
}