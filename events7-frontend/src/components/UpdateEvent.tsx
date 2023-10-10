import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
        // Reemplaza 'http://localhost:3001' con la URL de tu backend
        const response = await axios.get(`http://localhost:3000/event/${id}`);
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
      // Reemplaza 'http://localhost:3001' con la URL de tu backend
      const response = await axios.put(`http://localhost:3000/event/${id}`, eventData);
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
