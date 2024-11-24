import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navtabs.css';

const Navtabs = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); // Hook to get current URL path

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleTabClick = () => {
    setIsSidebarOpen(false); // Close the sidebar when a tab is clicked
  };

  const tabs = ['Home', 'Menu', 'About', 'Contact'];

  return (
    <div className="main_container">
      <nav className="navbar navbar-expand-lg nav-div">
        <button
          type="button"
          className="navbar-toggler"
          aria-controls="navbarContent"
          aria-expanded={isSidebarOpen}
          aria-label="Toggle navigation"
          onClick={toggleSidebar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Sidebar for small screens */}
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <button
            type="button"
            className="navbar-toggler"
            onClick={toggleSidebar}
          >
            <span>
              <i className="bi bi-x-lg cross" style={{ color: 'white' }}></i>
            </span>
          </button>
          <ul className="navbar-nav">
            {tabs.map((tab) => (
              <li key={tab} className="nav-item navtab-heads">
                <Link
                  to={`/${tab.toLowerCase()}`}
                  className={`nav-link font-weight-bold text-uppercase ${
                    location.pathname === `/${tab.toLowerCase()}` ? 'active' : ''
                  }`}
                  onClick={handleTabClick}
                >
                  {tab}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Nav elements for larger screens */}
        <div className="nav-elements">
          <ul className="nav-items-tabs">
            {tabs.map((tab) => (
              <li key={tab} className="nav-item navtab-heads">
                <Link
                  to={`/${tab.toLowerCase()}`}
                  className={`nav-link font-weight-bold text-uppercase ${
                    location.pathname === `/${tab.toLowerCase()}` ? 'active' : ''
                  }`}
                >
                  {tab}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navtabs;
