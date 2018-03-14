import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Particles from 'react-particles-js';

export default class App extends Component {

    constructor() {
        super();
    }
    render() {
        const body = {
            height: "100%"
        }
        const nav_bar={
            padding: '0 5%',
        }
        const nav = {
            overflow: 'hidden',
            position: 'fixed',
            top: '0',
            width: '100%',
            backgroundColor: '#0b4176',
        }
        
        const home = {
            float: 'left',
            fontSize: '20pt',
            color: '#fff',
            padding: '8px',
            fontWeight: 'bolder',
            textDecoration: 'none',
        }
        const login = {
            float: 'right',
            color: '#fff',
            textDecoration: 'none',
            border: '#ccc 1px solid',
            borderRadius: '8px',    
            padding: '15px',
        }

        const start = {
            backgroundColor: '#09335d',
            height: '100%',
            width: '100%',
        }
        const btext = {
            color: '#f9f3f4',
            textAlign: 'center',
            padding: '20% 0',
            width: '100%',
            lineHeight: '0.4em',
        }
        const particle = {
            width: '100%',
            height: '100%',
            backgroundColor: '#0F1331',
        }
        const btn = {
            color: '#fff',
            textDecoration: 'none',
            border: '#ccc 1px solid',
            padding: '10px 15px',
            borderRadius: '8px',
            lineHeight: '4em',
        }
        const linkLogo = 'https://cdn4.tgdd.vn/Products/Images/1784/60977/duolingo-icon-1.png';
        const logo = {
            height: '120pt',
            width: '120pt',
            float: 'left',
            padding: '0 5%'
        }
        const intro= {
            width: '70%',
            margin: '5% 10%',
        }
        const ttr = {
            display: 'inline',
            width: '70%',
            margin: '5% 15%',
            textAlign: 'center',
        }
        const lttr = {
            width: '150pt',
            display: 'inherit',
        }
        const rttr = {
            width: '150pt',
            display: 'inherit',
        }
        const footer = {
            backgroundColor: '#0b4176',
            textAlign: 'center',
        }
        const cr = {
            padding: '3px',
        }
        const linkCr ={
            textDecoration: 'none',
            color: '#fff'
        }
        return (
            <div style={body}>
                <div style={nav}>
                    <div style={nav_bar}>
                        <a href="#home" style={home} >duolingo</a>
                        <a href="#login" style={login} >Login</a>
                    </div>
                </div>
                <div style={start}>
                    <div style={btext}>
                        <h1>Duolingo clone</h1>
                        <a href="https://github.com/gungui98/Duolingo_clone" style={btn} >Get Started</a>
                    </div>
                </div>
                <div style={intro}>
                    <img src={linkLogo} style={logo} />
                    <h3>Cách tốt nhất để học một ngôn ngữ</h3>
                    <p>Học cùng Duolingo, bạn sẽ thấy rất vui và cuốn hút. Dành nhiều điểm từ các câu trả lời đúng, trả lời nhanh trước khi hết thời gian hay lên cấp. Những bài học nhỏ-gọn của chúng tôi rất hiệu quả, và đã có một nghiên cứu chứng minh điều này.</p>
                    <a href="https://youtu.be/8OebgtUjLg4">Xem cách chúng tôi làm</a>
                </div>
                <div style={ttr}>
                    <h3>Mỗi bài học đều được trò chơi hoá.</h3>
                    <div style={lttr}>
                        <h4>Đọc, Nghe, Nói</h4>
                        <p>Mỗi bài học sẽ bao gồm nhiều loại câu hỏi, thử thách về nghe, nói, dịch và trắc nghiệm.</p>
                    </div>
                    <div style={rttr}>
                        <h4>Ngày Streak</h4>
                        <p>Số ngày mà bạn đã học liên tục trên Duolingo. Đây là cách Duolingo khuyến khích người dùng luyện tập mỗi ngày.</p>
                    </div>
                    <div style={lttr}>
                        <h4>Chấm điểm trong bài học</h4>
                        <p>Ngay lập tức biết được câu trả lời nào bạn làm đúng. Khi bạn bỏ lỡ một thử thách, chúng tôi sẽ nhanh chóng chỉ cho bạn cách cải thiện..</p>
                    </div>
                    
                    <div style={rttr}>
                        <h4>Trái tim</h4>
                        <p>Với mỗi câu trả lời sai, bạn sẽ mất một trái tim trong quá trình làm bài. Nếu mất hết số trái tim, bạn sẽ phải bắt đầu lại từ đầu.</p>
                    </div>
                </div>
                <div style={footer}>
                <div style={cr}>
                    <a href="" style={linkCr}><h4>© Repo nhom3</h4></a>
                </div>
                </div>
            </div>
        );
    }

}
