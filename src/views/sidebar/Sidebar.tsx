import { useState } from 'react';
import './sidebar.scss';
import NavElements from '../../components/NavElements';

interface sidebarProps {
  showSidebar: boolean;
  setShowSidebar: any;
}

const Sidebar = ({ showSidebar, setShowSidebar }: sidebarProps) => {
  const showSideBar = showSidebar ? { left: '0' } : {};

  return (
    <div
      onTouchMove={() => setShowSidebar(false)}
      style={showSideBar}
      className="sidebar"
    >
      <NavElements />
    </div>
  );
};

export default Sidebar;
