import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

export class Login extends React.Component {
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

    this.props.loginWithPassword({email}, password, (err) => {
      if (err) {
        this.setState({error: 'Không thể đăng nhập. Sai tài khoản hoặc mật khẩu'});
      } else {
        this.setState({error: ''});
      }
    });
  }
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Đăng nhập</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
            <div className="input-field col s12">
              <i class="material-icons prefix">account_circle</i>
              <input type="email" ref="email" name="email" className="validate"/>
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12">
              <i class="material-icons prefix">lock</i>
              <input type="password" ref="password" name="password" className="validate"/>
              <label htmlFor="password">Mật khẩu  </label>
            </div>
            <button className="btn">Đăng nhập</button>
          </form>

          <Link className = "link" to="/signup">Tạo tài khoản mới?</Link>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginWithPassword: PropTypes.func.isRequired
};

export default createContainer(() => {
  return {
    loginWithPassword: Meteor.loginWithPassword
  };
}, Login);
