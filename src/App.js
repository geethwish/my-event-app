import React from 'react';

import { Route, Routes } from 'react-router-dom';
import CreateEvent from './pages/createEvent/CreateEvent';
import Event from './pages/event/Event';
import Home from './pages/home/Home';

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
