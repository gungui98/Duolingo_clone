import React from 'react';

export class Next extends React.Component{
    check(){
        
        if(this.props.answer == true){
            return "Corrent";
        }
        else if(this.props.answer !=null && this.props.answer == false ) {
            return "InCorrent";
        }
    }
    finish(){
        if (this.props.finish){
            return(
                <a href="/" className="brand-logo center grey-text text-darken-1 ">
                    <button className="btn waves-effect waves-light" name="next" type="submit" >
                        Kết thúc
                    </button>
                </a>
            )
        }
        else{
            return(
                <button className="btn waves-effect waves-light" name="next" type="submit"  onClick={this.props.next_qs_num}>
                    Tiếp
                </button>
            )
        }
    }
    render(){
        return(
            <div className=" row">
                <div className="col s2">
                    {this.check()}
                </div>
                <div className="col s4 offset-s6">
                    {this.finish()}
                </div>
            </div>
        )
    }
}

export  class Checked extends React.Component{
    render(){
        return(
            <div className=" row">
                <div className="col s2">
                    <button className="btn waves-effect waves-light" name="skin"  onClick={this.props.next_qs_num}>
                        Bỏ qua
                    </button>
                </div>
                <div className="col s4 offset-s6">
                    <button className="btn waves-effect waves-light" name="next" type="submit"  onClick={this.props.submit}>
                        Kiểm tra
                    </button>
                </div>
            </div>
        )
    }
}
