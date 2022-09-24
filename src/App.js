import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from '@mui/icons-material';
import CreateEvent from './pages/createEvent/CreateEvent';
import Event from './pages/event/Event';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateEvent />} />
        <Route path='/event' element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
