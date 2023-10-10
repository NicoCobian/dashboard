import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEventPage from './pages/CreateEventPage';
import ViewEventPage from './pages/ViewEventPage';
import UpdateEventPage from './pages/UpdateEventPage';
import DeleteEventPage from './pages/DeleteEventPage';

const AppRouter = () => {
  return (
    
      <Routes>
        <Route path="/create" element={<CreateEventPage />} />
        <Route path="/view/:id" element={<ViewEventPage />} />
        <Route path="/update/:id" element={<UpdateEventPage />} />
        <Route path="/delete/:id" element={<DeleteEventPage />} />
      </Routes>
    
  );
};

export default AppRouter;
