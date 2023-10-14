// AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventListPage from './pages/EventListPage';
import CreateEventPage from './pages/CreateEventPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventListPage />} />
        <Route path="/create" element={<CreateEventPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
