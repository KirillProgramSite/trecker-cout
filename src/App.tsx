import './App.css'

import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Register from './pages/Register/Register';
import NotFoundPage from './pages/NotFoundPage';
import { useEffect, useState } from 'react';
import { IUser } from './types/user';
import Main from './pages/Main/Main';
import Balance from './pages/Balance/Balance';
import Income from './pages/Balance/Income';
import Expenses from './pages/Balance/Expenses';


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
          <Route path="/main" element={<Main setUser={setUser} user={user} />} />
          <Route path="/balance" element={<Balance setUser={setUser} user={user} />}>
            <Route path="income" element={<Income />} />
            <Route path="expenses" element={<Expenses />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
