import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<{
    id: number;
    name: string;
    description: string;
    type: string;
  } | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        // Reemplaza 'http://localhost:3000' con la URL de tu backend
        // Asegúrate de que coincida con la ruta definida en tu backend ('/event/:id')
        const response = await axios.get(`http://localhost:3000/event/${id}`);
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
