import React from 'react';
import { Navigate } from 'react-router-dom';
import ContentPage from './component/views/Content/Content';
import FeedBackPage from './component/views/FeedBacks/FeedBacks';
import ForestPage from './component/views/Forest/Forest';
import HeatedHolePage from './component/views/HeatedHole/HeatedHole';
import HomePage from './component/views/Home/Home';
import LoginPage from './component/views/Login/Login';
import NotificationPage from './component/views/Notification/Notification';
import PromotionPage from './component/views/Promotion/Promotion';
import SettingPage from './component/views/Setting/Setting';
import ManagerPage from './component/views/Manager/ManagerPage';
import UserPage from './component/views/User/User';
import RecordPage from './component/views/Records/Records';
import DashboardLayout from './component/Nav/index';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'home', element: <HomePage /> },
      { path: 'user', element: <UserPage /> },
      { path: 'content', element: <ContentPage /> },
      { path: 'notification', element: <NotificationPage /> },
      { path: 'forest', element: <ForestPage /> },
      { path: 'heatedhole', element: <HeatedHolePage /> },
      { path: 'promotion', element: <PromotionPage /> },
      { path: 'feedback', element: <FeedBackPage /> },
      { path: 'manager', element: <ManagerPage /> },
      { path: 'record', element: <RecordPage /> },
      { path: 'setting', element: <SettingPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: '/', element: <Navigate to="/app/home" /> },
    ],
  },
  {
    path: '/',
    element: <LoginPage />,
  },
];

export default routes;
