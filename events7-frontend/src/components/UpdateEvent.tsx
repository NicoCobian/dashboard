import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../config/apiConfig'; // Ajusta la ruta relativa para llegar al archivo apiConfig.js

const UpdateEvent = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState({
    name: '',
    description: '',
    type: '',
    priority: 0,
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/events/${id}`); // Utiliza la URL base de la API para la solicitud GET
        setEventData(response.data);
      } catch (error) {
        console.error('Error al cargar el evento:', error);
      }
    };

    fetchEvent();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${API_BASE_URL}/api/events/${id}`, eventData); // Utiliza la URL base de la API para la solicitud PUT
      console.log('Evento actualizado:', response.data);
      // Aquí puedes redirigir al usuario a la vista del evento actualizado o realizar otras acciones necesarias
    } catch (error) {
      console.error('Error al actualizar evento:', error);
    }
  };

  return (
    <div>
      <h2>Actualizar Evento</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields para name, description, type, priority */}
        <button type="submit">Actualizar Evento</button>
      </form>
    </div>
  );
};

export default UpdateEvent;
