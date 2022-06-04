import React, { useContext, useEffect } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const AppRouter = () => {

  const { auth, verificaToken } = useContext(AuthContext);

  useEffect(() => {
    verificaToken()
  }, [verificaToken]);

  if (auth.checking) {
    return <h1>Espere por favor</h1>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth/*' element={
          <PublicRoute isAuthenticated={auth.logged}>
            <AuthRouter />
          </PublicRoute>
        } />


        <Route path='/' element={
          <PrivateRoute isAuthenticated={auth.logged}>
            <ChatPage />
          </PrivateRoute>
        } />

        <Route path='/*' element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  )
}
