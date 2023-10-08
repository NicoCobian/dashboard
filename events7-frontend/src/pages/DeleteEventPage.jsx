import React from 'react';
import DeleteEvent from '../components/DeleteEvent'; // Asegúrate de utilizar la ruta correcta

const DeleteEventPage = () => {
  return (
    <div>
      <h1>Eliminar Evento</h1>
      <DeleteEvent /> {/* Renderiza el componente DeleteEvent */}
      {/* Otro contenido de la página si es necesario */}
    </div>
  );
};

export default DeleteEventPage;
