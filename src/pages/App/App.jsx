import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NotebookListPage from '../NotebookListPage/NotebookListPage';
import NotebookPage from '../NotebookPage/NotebookPage';
import NotebookDetailsPage from '../NotebookDetailsPage/NotebookDetailsPage';
import NavBar from '../../components/NavBar/NavBar';
import {index} from '../../utilities/notebooks-api'
import EditName from '../../components/EditName/EditName';


export default function App() {
  const [user, setUser] = useState(getUser());
  index().then(notebooks =>
    console.log(notebooks))
      return (
    <main className="App">
      { user ?
        <>
          <NavBar user={ user } setUser={setUser} />
          <Routes>
            <Route path="/" element={<NotebookListPage />} />
            <Route path="/notebooks" element={<NotebookPage />} />
            <Route path="/notebooks/:notebookId" element={<NotebookDetailsPage />} />
            <Route path="/edit/:notebookId" element={<EditName />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  )
}