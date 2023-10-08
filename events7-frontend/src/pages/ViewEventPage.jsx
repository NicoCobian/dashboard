import React from 'react';
import ViewEvent from '../components/ViewEvent';

const ViewEventPage = () => {
  return (
    <div>
      <h1>Ver Detalles del Evento</h1>
      <ViewEvent /> {/* Renderiza el componente ViewEvent */}
      {/* Otro contenido de la página si es necesario */}
    </div>
  );
};

export default ViewEventPage;
