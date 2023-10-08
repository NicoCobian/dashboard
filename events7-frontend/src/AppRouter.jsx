import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEvent from './components/CreateEvent';
import ViewEvent from './components/ViewEvent';
import UpdateEvent from './components/UpdateEvent';
import DeleteEvent from './components/DeleteEvent';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/view/:id" element={<ViewEvent />} />
        <Route path="/update/:id" element={<UpdateEvent />} />
        <Route path="/delete/:id" element={<DeleteEvent />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
