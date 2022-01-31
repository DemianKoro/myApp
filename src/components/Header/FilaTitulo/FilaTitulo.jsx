import React from 'react';
import Logo from './Logo/Logo';
import Titulo from './Titulo/Titulo';
import "./FilaTitulo.scss"

const FilaTitulo = () => {
  return <div className='filaTitulo'>
            <Logo />
            <Titulo />
        </div>;
};

export default FilaTitulo;
