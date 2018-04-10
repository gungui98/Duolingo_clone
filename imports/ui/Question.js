import React from 'react';

export default class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.selected(event.target.value);
        this.setState({
            selected: event.target.value
        });
    }

    render() {
        return (
            <div className="container" >
                <div style={{ margin: '5%' }}>
                    <h5>Câu hỏi: {this.props.qz.question}</h5>
                </div>
                <div className="row container">
                    <div className="col s12 m4">
                        <label>
                            <input
                                type="radio"
                                value={this.props.qz.answer1}
                                checked={this.state.selected === this.props.qz.answer1}
                                onChange={this.handleChange}
                            />
                            <span><h6>{this.props.qz.answer1}</h6></span>
                        </label>
                    </div>
                    <div className="col s12 m4">
                        <label>
                            <input
                                type="radio"
                                value={this.props.qz.answer2}
                                checked={this.state.selected === this.props.qz.answer2}
                                onChange={this.handleChange}
                            />
                            <span>{this.props.qz.answer2}</span>
                        </label>
                    </div>
                    <div className="col s12 m4">
                        <label>
                            <input
                                type="radio"
                                value={this.props.qz.answer3}
                                checked={this.state.selected === this.props.qz.answer3}
                                onChange={this.handleChange}
                            />
                            <span>{this.props.qz.answer3}</span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}