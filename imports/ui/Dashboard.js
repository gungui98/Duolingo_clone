import React from 'react';

import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';
import Editor from './Editor';

export default () => {
  return (
    <div>
      <div className="hide-on-small-only">
        <PrivateHeader title="Daskboard"/>
        <div className="page-content">
          <div className="page-content__sidebar">
            <NoteList/>
          </div>
          <div className="page-content__main">
            <Editor/>
          </div>
        </div>
      </div>
      <div className="hide-on-med-and-up">
        <nav className="z-depth-3">
          <div className="nav-wrapper grey lighten-3">
            <a to="/" className="brand-logo center grey-text text-darken-1 ">Topic</a>
          </div>
        </nav>
        <footer className="page-footer" style={{position:'fixed',bottom:0,left:0,width:'100%'}}>
          <nav className="z-depth-3">
            <div className="nav-wrapper grey lighten-3">
              <a to="/" className="brand-logo center grey-text text-darken-1 ">footer here</a>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};
