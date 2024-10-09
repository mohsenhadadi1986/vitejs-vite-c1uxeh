import React from 'react';

interface SidebarProps {
  activeView: 'charts' | 'table';
  setActiveView: (view: 'charts' | 'table') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  return (
    <div style={{
      width: '200px',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      padding: '20px',
      boxSizing: 'border-box',
    }}>
      <h2>Navigation</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <button
            onClick={() => setActiveView('charts')}
            style={{
              ...buttonStyle,
              backgroundColor: activeView === 'charts' ? '#007bff' : '#ffffff',
              color: activeView === 'charts' ? '#ffffff' : '#000000',
            }}
          >
            Charts
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveView('table')}
            style={{
              ...buttonStyle,
              backgroundColor: activeView === 'table' ? '#007bff' : '#ffffff',
              color: activeView === 'table' ? '#ffffff' : '#000000',
            }}
          >
            Table
          </button>
        </li>
      </ul>
    </div>
  );
};

const buttonStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px',
  margin: '5px 0',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

export default Sidebar;