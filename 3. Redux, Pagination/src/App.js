import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';


import { HomePage } from './pages/homepage/HomePage';
import { RepoPage } from './pages/repopage/RepoPage';


function App() {

   const elements = useRoutes([
      {
         path: '/',
         element: <HomePage />,
      },
      {
         path: '/repo/:owner/:repoName',
         element: <RepoPage />,
      },

]);

   return elements;
}

export default App;
