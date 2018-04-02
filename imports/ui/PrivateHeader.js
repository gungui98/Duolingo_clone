import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import PropTypes from 'prop-types';

export const PrivateHeader = (props) => {
  const navImageSrc = props.isNavOpen ? '/images/x.svg' : '/images/bars.svg';

  return (
    <div className="header z-depth-3">
      <div className="header__content">
        <img className="header__nav-toggle" src={navImageSrc} onClick={props.handleNavToggle}/>
        <h1 className="header__title">{props.title}</h1>
        <button className="btn" onClick={() => props.handleLogout()}>Logout</button>
      </div>
    </div>
  );
};

PrivateHeader.propTypes = {
  title:PropTypes.string.isRequired,
  handleLogout:PropTypes.func.isRequired,
  isNavOpen:PropTypes.bool.isRequired,
  handleNavToggle:PropTypes.func.isRequired
};

export default createContainer(() => {
  return {
    handleLogout: () => Accounts.logout(),
    handleNavToggle: () => Session.set('isNavOpen', !Session.get('isNavOpen')),
    isNavOpen: Session.get('isNavOpen')
  };
}, PrivateHeader);
