import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config/apiConfig'; // Ajusta la ruta relativa para llegar al archivo apiConfig.js

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    name: '',
    description: '',
    type: '',
    priority: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${API_BASE_URL}/api/events`, eventData); // Utiliza la URL base de la API para la solicitud
      console.log('Evento creado:', response.data);
      // Aquí puedes redirigir al usuario a la vista del evento creado o realizar otras acciones necesarias
    } catch (error) {
      console.error('Error al crear evento:', error);
    }
  };

  return (
    <div>
      <h2>Crear Nuevo Evento</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={eventData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Tipo:</label>
          <input
            type="text"
            name="type"
            value={eventData.type}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Prioridad:</label>
          <input
            type="number"
            name="priority"
            value={eventData.priority}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Crear Evento</button>
      </form>
    </div>
  );
};

export default CreateEvent;
