import React from 'react';
import CreateEvent from '../components/CreateEvent'; // Asegúrate de utilizar la ruta correcta

const CreateEventPage = () => {
  return (
    <div>
      <h1>Crear Nuevo Evento</h1>
      <CreateEvent /> {/* Renderiza el componente CreateEvent */}
      {/* Otro contenido de la página si es necesario */}
    </div>
  );
};

export default CreateEventPage;
