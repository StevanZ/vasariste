import { useState } from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

const ApplicationContent = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="app-content">
      <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
    </div>
  );
};

export default ApplicationContent;
