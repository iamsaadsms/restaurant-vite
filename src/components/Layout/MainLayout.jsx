import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Common/Navbar+Header/Navbar';
import Footer from '../Common/Footer';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;