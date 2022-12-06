import React, {useState} from 'react';
import AuthPage from '../AuthPage/AuthPage';
import NewPage from '../NewPage/NewPage';
import InformationPage from '../InformationPage/InformationPage';
import { Routes, Route} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

import './App.css';

export default function App() {
  //im intentionally leaving this empty (null)
  const [user, setUser] = useState("mikee")
  return (
    <div className="App">
      App
      {user ? (
      <>
      <NavBar/>
      <Routes>
        <Route path='/alex' element={<div>
          <h2>Alex was here</h2>
          <button>Click me!</button>
        </div>}
        />
        <Route path="/information/new" element={<NewPage />} />
        <Route path="/information" element={<InformationPage />} />
      </Routes>
      </>
      ):( 
      <AuthPage/>
      )}
    </div>
  );
}
