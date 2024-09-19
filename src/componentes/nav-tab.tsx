import { bottom } from '@popperjs/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Estilos separados em CSS


const Header: React.FC = () => {
  return (
    <header style={{}}>

    <div>
      <ul>
        <li>
          <div className="back-button">
            <span>&larr;</span>
          </div>
          <img src='/img/jjm-log_logo_mini.png' width={120}></img>
      </li>       
      </ul>
      <div className="navbar">
      <div className="nav-items">
        <span className="nav-item">Processos</span>
        <span className="nav-item active">Historico</span>
      </div>
    </div>
      </div>

      
      
      
    </header>
  );
};

export default Header;
