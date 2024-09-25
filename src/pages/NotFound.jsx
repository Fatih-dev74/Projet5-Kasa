import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='error'>
      <h2 className='error__title'>404</h2>
      <p className='error__text'>Oups! La page que <br className="error__text--break" /> vous demandez n'existe pas.</p>
      <Link className='error__link' to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
};

export default NotFound;