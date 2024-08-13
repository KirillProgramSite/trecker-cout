import './App.css'

import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Register from './pages/Register/Register';
import NotFoundPage from './pages/NotFoundPage';
import { useState } from 'react';
import { IUser } from './types/user';

const App = () => {
  const [user, setUser] = useState<IUser>({
    name: '',
    surname: '',
    email: '',
    password: '',
    cards: [],
    goals: [],
    income: [],
    expenses: []
});

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
