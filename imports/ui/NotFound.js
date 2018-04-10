import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>404 - Page Not Found</h1>
        <p>Không tìm thấy trang.</p>
        <Link to="/" className="btn">Trang chủ</Link>
      </div>
    </div>
  );
};
