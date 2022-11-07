import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Holder from './Holder';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/home" element={<ProtectedRoute><Holder /></ProtectedRoute>} /> 
            <Route path="/login" element={<LoginPage />} />  
            <Route path="/" element={<SignUpPage />} />  
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router