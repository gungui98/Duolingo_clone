import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

export class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    let re_password = this.refs.re_password.value.trim();

    if (password.length < 9) {
      return this.setState({error: 'Mật khẩu phải dài hơn 6 ký tự'});
    }
    if (re_password !== password) {
      return this.setState({error: 'Mật khẩu không khớp'});
    }

    this.props.createUser({email, password}, (err) => {
      if (err) {
        this.setState({error: err.reason});
      } else {
        this.setState({error: ''});
      }
    });
  }
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Đăng ký</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
          <div className="input-field col s12">
              <input type="email" ref="email" className="validate"/>
              <label for="email">Email</label>
            </div>
            <div className="input-field col s12">
              <input type="password" ref="password" className="validate"/>
              <label htmlFor="password">Mật khẩu</label>
            </div>
            <div className="input-field col s12">
              <input type="password" ref="re_password" className="validate"/>
              <label htmlFor="re-password">Xác nhận mật khẩu</label>
            </div>
            <button className="btn">Tạo tài khoản</button>
          </form>

          <Link className = "link" to="/login">Đã có tài khoản?</Link>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  createUser:PropTypes.func.isRequired
};

export default createContainer(() => {
  return {
    createUser: Accounts.createUser
  };
}, Signup);
