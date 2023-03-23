import React from 'react';
import imagenLogo from '../imagenes/fcc_logo.png';
import '../hojas_de_estilo/logo.css';

function LogoImagen() {
    return (
        <div className='logo-contenedor'>
            <img className='logo'
                src={imagenLogo} alt='Logo' />
        </div>
    )
}
export default LogoImagen;