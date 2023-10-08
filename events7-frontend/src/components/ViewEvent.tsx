import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../config/apiConfig'; // Ajusta la ruta relativa para llegar al archivo apiConfig.js

const ViewEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<{ id: number, name: string, description: string, type: string } | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/events/${id}`); // Utiliza la URL base de la API para la solicitud GET
        setEvent(response.data);
      } catch (error) {
        console.error('Error al cargar el evento:', error);
      }
    };

    fetchEvent();
  }, [id]);

  return (
    <div>
      <h2>Detalles del Evento</h2>
      {event ? (
        <div>
          <p>ID: {event.id}</p>
          <p>Nombre: {event.name}</p>
          <p>Descripción: {event.description}</p>
          <p>Tipo: {event.type}</p>
          {/* Resto del contenido */}
        </div>
      ) : (
        <p>Cargando evento...</p>
      )}
    </div>
  );
};

export default ViewEvent;
