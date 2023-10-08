import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import API_BASE_URL from '../config/apiConfig'; // Ajusta la ruta relativa para llegar al archivo apiConfig.js

const DeleteEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`${API_BASE_URL}/api/events/${id}`); // Utiliza la URL base de la API para la solicitud DELETE
      // Después de la eliminación, puedes redirigir al usuario a una página diferente
      navigate('/'); // Redirige al usuario a la página de inicio u otra ruta adecuada
    } catch (error) {
      console.error('Error al eliminar evento:', error);
    }
  };

  return (
    <div>
      <h2>Eliminar Evento</h2>
      <p>¿Estás seguro de que deseas eliminar este evento?</p>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default DeleteEvent;
