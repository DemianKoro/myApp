import React from 'react';
import PromoSlider from './PromoSlider/PromoSlider';
import Navbar from '../Navbar/Navbar'
import './Header.scss';
import FilaTitulo from './FilaTitulo/FilaTitulo';

const Header = () => {
  return  <div className="header">
            <PromoSlider />
            <FilaTitulo />
            <Navbar />
          </div>
};

export default Header;

