import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Particles from 'react-particles-js';

export default class App extends Component {

    constructor() {
        super();
    }
    render() {
        const login = 'Đăng nhập';
        const body = {
            height: '100%'
        }
        const start = {
            backgroundColor: '#09335d',

            height: '100%',
            width: '100%',
            display: 'table',
        }
        const startBody = {
            display: 'table-cell',
            verticalAlign: 'middle',
            textAlign: 'center',
        }
        const btext = {
            color: '#f9f3f4',
            textAlign: 'center',
            lineHeight: '0.4em',
            padding: '20px',
        }
        const btn = {
            padding: '15px 20px',
            fontSize: '1.5em',
        }
        const stb = {
            paddingTop: '5%',
        }
        return (
            <div style={body}>
                <nav className="navbar navbar-expand-lg navbar-light d-none d-sm-block bg-primary fixed-top" >
                    <div className="container-fluid container">
                        <a className="navbar-brand" href="1.html">
                            <h2 className="text-white">duolingo</h2>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            </ul>
                            <div className="my-lg-0">
                                <button type="button" className="btn btn-primary">{login}</button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div style={start}>
                    <div style={startBody}>
                        <div className="row container" >
                            <div className="col-md-6">
                                <img src="https://d7mj4aqfscim2.cloudfront.net/images/splash-2014/globe1.svg" width="70%" height="70%" />
                            </div>
                            <div className="col-md-6" style={stb}>
                                <h1 style={btext}>Duolingo- Học tiếng anh</h1>
                                <a href="https://github.com/gungui98/Duolingo_clone" className="badge badge-success" style={btn}>Bắt đầu học</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container alert">
                    <div className="row justify-content-center">
                        <div className="col-md-4 alert ">
                            <h1>Duolingo</h1>
                        </div>
                        <div className="col-md-6 alert ">
                            <h3>Cách tốt nhất để học một ngôn ngữ</h3>
                            <p>Học cùng Duolingo, bạn sẽ thấy rất vui và cuốn hút. Dành nhiều điểm từ các câu trả lời đúng, trả lời nhanh trước khi hết thời gian hay lên cấp. Những bài học nhỏ-gọn của chúng tôi rất hiệu quả, và đã có một nghiên cứu chứng minh điều này.</p>
                        </div>
                    </div>
                </div>
                <div className="container alert">
                    <div className="row justify-content-center">
                        <div className="col-md-6 alert ">
                            <p>Thử giao diện mới với ứng dụng cho iPhone và Android của chúng tôi. Tải về và bạn sẽ biết vì sao Apple và Google trao cho Duolingo danh hiệu xuất sắc nhất.</p>
                        </div>
                        <div className="col-md-5 alert ">
                            <h2>Học mọi lúc mọi nơi</h2>
                            <button type="button" className="btn btn-outline-primary">IOS</button>
                            <button type="button" className="btn btn-outline-secondary">Android</button>
                            <button type="button" className="btn btn-outline-success">Window Phone</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <h3 >Học tiếng anh cùng Duolingo</h3>
                        </div>
                        <div className="col-md-3">
                            <a href="1.html" className="badge badge-success" style={btn}>Bắt đầu học</a>
                        </div>
                    </div>
                    <hr />
                    <div >
                        <p className="text-center ">© Made by <a href="https://github.com/gungui98/Duolingo_clone">nhom3</a> - CNPM</p>
                    </div>
                </div>
            </div>

        );
    }

}
