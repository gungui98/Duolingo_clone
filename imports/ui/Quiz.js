import React from 'react';


import Point from './Point';
import Question from './Question';
import {Next, Checked} from './Check';


const qs = [
    {
        _id: '1',
        "question": "Chọn từ cho 'quả táo'",
        "answer1": "apple",
        "answer2": "banana",
        "answer3": "pipeapple",
        "as": "apple",
    },
    {
        _id: '2',
        "question": "Chọn từ cho 'quả chanh'",
        "answer1": "banana",
        "answer2": "pipeapple",
        "answer3": "lemon",
        "as": "lemon"
    },
    {
        _id: '3',
        "question": "Chọn từ cho 'con mèo'",
        "answer1": "cat",
        "answer2": "dog",
        "answer3": "fish",
        "as": "cat",
    },
    {
        "question": "Chọn từ cho 'cậu bé'",
        "answer1": "boy",
        "answer2": "women",
        "answer3": "man",
        "as": "boy",
    },
    {
            "question": "Chọn từ cho 'quả chuối'",
            "answer1": "banana",
            "answer2": "lemon",
            "answer3": "apple",
            "as": "banana",
     }
]


export default class Quiz extends React.Component {
    constructor(){
        super();

        this.state={
            selected: '',
            qs_num:0,
            point:0,
            answer: null,
            finish: false,
        }
    }
    
    select = (sl) => {
        this.setState({selected: sl})
    }

    next_qs_num = () => {
        if (this.state.qs_num < qs.length - 1 ){
            this.setState({
                selected:'',
                answer:null,
                qs_num: this.state.qs_num+1
            })
        }
        else{
            this.setState({
                finish: true,
            })
        }
    }

    submit = () => {
        if ( qs[this.state.qs_num].as == this.state.selected) {
            this.setState({
                selected:'',
                answer:true,
                point: this.state.point+1
            })
        }
        else{
            this.setState({
                selected:'',
                answer:false
            })
        }
    }
    check(){
        
        if(this.state.selected != '' ){
            return <Checked submit={this.submit} next_qs_num={this.next_qs_num} />
        }
        else{
            return <Next  next_qs_num={this.next_qs_num} answer={this.state.answer} finish={this.state.finish} />;
        }
    }
    render(){

        return(
            <div style={{height: '100%'}}>
                <Point point={this.state.point / qs.length * 100}/>
                <div style={{marginTop:"10%"}}>
                    <Question qz={qs[this.state.qs_num]} selected={this.select} />
                </div>
                <div className="container">
                    <div className="hide-on-small-only" style={{position: 'fixed', bottom: 4, width: '100%' }}>
                        {this.check()}
                    </div>
                    <div className="hide-on-med-and-up">
                        {this.check()}
                    </div>
                </div>
            </div>
        )
    }
};

