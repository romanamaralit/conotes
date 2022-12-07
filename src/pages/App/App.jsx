import React, {useState} from 'react';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewPage from '../NewPage/NewPage';
import InformationPage from '../InformationPage/InformationPage';
import { Routes, Route} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

import './App.css';

export default function App() {
  //im intentionally leaving this empty (null)
  const [user, setUser] = useState(getUser())
  return (
    <div className="App">
      App
      {user ? (
      <>
      <NavBar user={user}
      setUser={setUser}/>
      <Routes>
        <Route path='/alex' element={<div>
          <h2>Mikee was here</h2>
          <button>Click me!</button>
        </div>}
        />
        <Route path="/information/new" element={<NewPage />} />
        <Route path="/information" element={<InformationPage />} />
      </Routes>
      </>
      ):( 
      <AuthPage setUser={setUser}/>
      )}
    </div>
  );
}
