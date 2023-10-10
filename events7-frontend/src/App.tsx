import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter'; // Importa tu archivo de enrutamiento
import { Link } from 'react-router-dom';


const App = () => {
  return (
    <Router>
    <div>
      <h1>Mi Aplicación React</h1>
      <nav>
        <ul>
          <li>
            <Link to="/create">Crear Evento</Link>
          </li>
          <li>
            <Link to="/view/2">Ver Evento 1</Link>
          </li>
          <li>
            <Link to="/update/3">Actualizar Evento 1</Link>
          </li>
          <li>
            <Link to="/delete/4">Eliminar Evento 1</Link>
          </li>
        </ul>
      </nav>
      <AppRouter /> {/* Utiliza el enrutador configurado */}
    </div>
    </Router>
  );
};

export default App;
