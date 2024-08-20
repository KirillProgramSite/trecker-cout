import './App.css'

import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Register from './pages/Register/Register';
import NotFoundPage from './pages/NotFoundPage';
import { useEffect, useState } from 'react';
import { IUser } from './types/user';
import Login from './pages/Login/Login';


const App = () => {
  const initialUserState: IUser = JSON.parse(localStorage.getItem('user') || '{}');

  const [user, setUser] = useState<IUser>(initialUserState);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register setUser={setUser} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
