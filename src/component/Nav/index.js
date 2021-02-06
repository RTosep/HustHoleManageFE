import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import TopBar from '../Header';

const DashboardLayout = () => (
  <>
    <TopBar />
    <NavBar />
    <Outlet />
  </>
);
export default DashboardLayout;
