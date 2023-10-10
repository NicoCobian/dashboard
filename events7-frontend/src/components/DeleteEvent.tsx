import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      // Reemplaza 'http://localhost:3001' con la URL de tu backend
      await axios.delete(`http://localhost:3000/event/${id}`);
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
