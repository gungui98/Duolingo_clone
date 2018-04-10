import React from 'react';

import PrivateHeader from './PrivateHeader';
// import NoteList from './NoteList';
// import Editor from './Editor';
import MobileDashboard from'./dashboard/mobile';
import PCDashboard from'./dashboard/pc';

export default () => {
  return (
    <div>
      
      {/* <div className="hide-on-small-only">
        <PrivateHeader title="Daskboard"/>
        <div className="page-content">
          <div className="page-content__sidebar">
            <NoteList/>
          </div>
          <div className="page-content__main">
            <Editor/>
          </div>
        </div>
      </div>     */}
      
      {/* <MobileDashboard/> */}
      <PCDashboard/>
      <MobileDashboard/>
    </div>
  );
};
