import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>Unsupport feature</h1>
        <p>feature is under developing</p>
        <Link to="/" className="button button--link">HOME</Link>
      </div>
    </div>
  );
};
