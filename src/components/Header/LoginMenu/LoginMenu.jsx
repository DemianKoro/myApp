import React from 'react';
import Carrito from './Carrito/Carrito';
import Login from './Login/Login';
import Search from './Search/Search';
import './LoginMenu.scss'

const LoginMenu = () => {
  return <div className="loginMenu">
            <Search />
            <Carrito />
            <Login />
        </div>;
};

export default LoginMenu;

            
