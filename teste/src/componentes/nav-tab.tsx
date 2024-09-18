import { bottom } from '@popperjs/core';
import React from 'react';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  return (
    <header style={{ display: 'flex',
                     justifyContent: 'space-between', 
                     alignItems: 'center', 
                     backgroundColor: '#FAFAFA', 
                     padding: '10px', 
                     margin: 'auto',
                     borderBottom: 'solid 1px'}}>
      <div>
        <img src='/img/jjm-log_logo_mini.png' width={200}></img>
      </div>
      
      <div>
        <nav>
        <Link to="/login" style={{ color: 'Black', marginRight: '20px', textDecoration: 'none' }}>Login</Link>
        <Link to="/processos" style={{ color: 'Black', textDecoration: 'none' }}>Processos</Link>
      </nav>
      </div>
      
      
    </header>
  );
};

export default Header;
