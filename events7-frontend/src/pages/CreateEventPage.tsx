import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles/CreateEventPage.css';

const CreateEventPage = () => {
  const [eventData, setEventData] = useState({
    name: '',
    description: '',
    type: 'crosspromo',
    priority: 1,
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/events', eventData);
      console.log('Evento creado:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error al crear evento:', error);
    }
  };

  return (
    <div className="container">
      <h1>Create New Event</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={eventData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Type:</label>
          <select
            name="type"
            value={eventData.type}
            onChange={handleInputChange}
          >
            <option value="crosspromo">Crosspromo</option>
            <option value="liveops">Liveops</option>
            <option value="app">App</option>
            <option value="adds">Ads</option>
          </select>
        </div>
        <div>
          <label>Priority:</label>
          <input
            type="number"
            name="priority"
            value={eventData.priority}
            onChange={handleInputChange}
            min="1" // valor min
            max="10" // valor max
          />
        </div>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEventPage;
