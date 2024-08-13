import './App.css'

import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Register from './pages/Register';
import NotFoundPage from './pages/NotFoundPage';
import { useState } from 'react';
import { IUser } from './types/user';

const App = () => {
  const [user, setUser] = useState<IUser[]>([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/reg" element={<Register />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
