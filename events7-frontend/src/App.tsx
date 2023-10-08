// App.js
import React from 'react';
import AppRouter from './AppRouter'; // Importa tu archivo de enrutamiento

const App = () => {
  return (
    <div>
      <h1>Mi Aplicación React</h1>
      <AppRouter /> {/* Utiliza el enrutador configurado */}
    </div>
  );
};

export default App;
