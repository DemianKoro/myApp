import React from 'react';
import Logo from './Logo/Logo';
import Titulo from './Titulo/Titulo';
import "./FilaTitulo.scss"
import LoginMenu from '../LoginMenu/LoginMenu';

const FilaTitulo = () => {
  return <div className='filaTitulo'>
            <Logo />
            <Titulo />
            <LoginMenu />
        </div>;
};

export default FilaTitulo;
