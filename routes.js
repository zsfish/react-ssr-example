import React from 'react';
import { Route, Link } from 'react-router-dom';
import Index from './container/index';
import Login from './container/login';
import App from './App';
export default [
  {
      path: '/',
      component: App,
      routes: [
          {
              path: '/',
              component: Index,
              loadData: Index.load,
              exact: true,
              key: 'home',
          },
          {
              path: '/login',
              component: Login,
              exact: true,
              key: 'login'
          }
      ]
  }
]