import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EventListPage from './pages/EventListPage';
import CreateEventPage from './pages/CreateEventPage';
import './app.css'; 
function App() {
  return (
    <Router>
      <div className="container"> {/* Agrega la clase "container" para centrar el contenido */}
        <h1>Events7</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Event List</Link>
            </li>
            <li>
              <Link to="/create">Create Event</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<EventListPage />} />
          <Route path="/create" element={<CreateEventPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
