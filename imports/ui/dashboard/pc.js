import React from 'react';

export default class PCDashboard extends React.Component {
    render() {
        return (
            <div className='hide-on-small-only'>
                <nav>
                    <div className="nav-wrapper blue lighten-1">
                        <div className='row'>
                            <a href="\home" className="brand-logo col offset-s1"><i className="material-icons">cloud</i>Logo</a>
                            <ul className="right hide-on-med-and-down">

                                <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
                                <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
                                <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='container'>
                    <div className='row'>
                        <div className='col s8 topic-box-pc z-depth-3'>
                            <div className='row offset-s6'>
                            <img src="/images/topic/icon.svg" alt="" className="circle responsive-img center-align"/>
                            </div>
                            <div className='row offset-s6'>
                            <h1>this is in side</h1>
                            </div>
                            <div className='row offset-s6'>
                            <h1>this is in side</h1>
                            </div>
                            <div className='row offset-s6'>
                            <h1>this is in side</h1>
                            </div>
                            <div className='row offset-s6'>
                            <h1>this is in side</h1>
                            </div>

                        </div>
                        <div className='user-box-pc offset-s1 col s3  '>
                            {/*<img src="sprite.svg#svgView(viewBox(0, 0, 32, 32))" alt="">*/}
                            <div>
                                <div className='row s3 offset-s1 user-detail z-depth-3'>
                                    <h4 className='center-align'> this is level</h4>
                                    <img className = 'crown center-align' src="/images/crown-empty.svg"/>
                                </div>
                                <div className='row s3 offset-s1 user-detail z-depth-3'>
                                    <span className="flow-text">This is user level</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}