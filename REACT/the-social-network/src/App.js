import React, { Suspense, lazy, } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';

// const Home = lazy(() => import('./views/Home'));
// const Connect = lazy(() => import('./views/Connect'));
// const Subscribe = lazy(() => import('./views/Subscribe'));
// const Error = lazy(() => import('./views/Error'));


import Home from './views/Home'
import Connect from './views/Connect'
import Subscribe from  './views/Subscribe'
import UpdateUser from  './views/UpdateUser'
import SearchUser from './views/SearchUser'

import Error from './views/Error'



const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  { path: "/Connexion", element: <Connect /> },
  { path: "/Sinscrire", element: <Subscribe /> },
  { path: "/Mettre-a-jour", element: <UpdateUser />},
  { path: "/chercher-un-utilisateur", element: <SearchUser /> }

]);




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />

      </header>
    </div>
  );
}

export default App;


